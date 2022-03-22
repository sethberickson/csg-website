import React , {useState} from 'react';
import AWS from 'aws-sdk'

const S3_BUCKET ='csg-website';
const REGION ='us-west-1';


AWS.config.update({
    accessKeyId: 'AKIA34AD7CFHUEQNNWUD',
    secretAccessKey: 'W8T5ewU9S4nzxiF5Xf1UOZ4s5SYsMCguHD7xHtH'
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})

export default function UploadImageToS3() {

    const [progress , setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const [files, setFiles] = React.useState([]);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = (file) => {

        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
            })
            .send((err) => {
                if (err) console.log(err)
            })
    }

    const listFiles = () => {

        const params = {
            ACL: 'public-read',
            Bucket: S3_BUCKET,
        };

        myBucket.listObjects(params)
        console.log('getting data...')
    }
    
    const data = listFiles()

    setFiles(data)


    return (
        <div>
            <div>
                <div>Native SDK File Upload Progress is {progress}%</div>
                <input type="file" onChange={handleFileInput}/>
                <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
            </div>
            <div>
                {files.map((item) => (
                    <p>{item.name}</p>
                ))}
            </div>
        </div>
    )
}