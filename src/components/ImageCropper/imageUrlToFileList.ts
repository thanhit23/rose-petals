import axios from 'axios';

async function imageUrlToFileList(url: string, fileName: string) {
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  const blob = new Blob([response.data], { type: response.headers['content-type'] });

  const file = new File([blob], `cropped-${fileName}`, { type: blob.type });
  const fileList = { 0: file, length: 1 };

  return fileList;
}

export default imageUrlToFileList;
