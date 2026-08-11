import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate data
    if (!data.name || !data.mobile || !data.role || !data.password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Path to the JSON file
    const filePath = path.join(process.cwd(), 'deletion_file_data.json');
    
    // Read existing data if file exists
    let existingData: any[] = [];
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      if (fileContent) {
         existingData = JSON.parse(fileContent);
      }
    } catch (error: any) {
      // If file doesn't exist, we just start with an empty array
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }

    // Add new deletion request with timestamp
    existingData.push({
      ...data,
      deletedAt: new Date().toISOString()
    });

    // Write back to the file
    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));

    return NextResponse.json({ success: true, message: 'Your account is deleted' });
  } catch (error) {
    console.error('Error handling delete account request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
