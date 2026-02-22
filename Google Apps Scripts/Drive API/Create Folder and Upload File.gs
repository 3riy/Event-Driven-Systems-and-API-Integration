// -- Create folder and upload file into folder -- //

function Create_Folder_Upload_Files() {
  // 1. Create a folder
  var folderMetadata = {
    name: "API Demo Folder",
    mimeType: "application/vnd.google-apps.folder"
  };

  var folder = Drive.Files.create(folderMetadata);
  var folderId = folder.id;

  // 2. Create file content
  var fileContent = "Hello from Google Drive API";
  var blob = Utilities.newBlob(fileContent, "text/plain", "demo.txt");

  // 3. Upload file into folder
  var fileMetadata = {
    name: "demo.txt",
    parents: [folderId] 
  };

  Drive.Files.create(fileMetadata, blob);
  
}
