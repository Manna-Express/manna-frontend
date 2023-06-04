import Resizer from 'react-image-file-resizer';



export const resizeFile = (file:any,height:number,width:number) =>{
    return new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        width,
        height,
        'JPEG',
        100,
        0,
        (uri) => {
          resolve({uri,type:file.type});
        },
        'base64'
      );
    });
  }