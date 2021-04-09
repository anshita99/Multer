import React, { Component } from "react";
import UploadService from "../services/file-upload.service";

export default class UploadImages extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);
    this.showImage = this.showImage.bind(this);

    this.state = {
      currentFile: undefined,
      previewImage: undefined,
      progress: 0,
      message: [],

      imageInfos: [],
    };
  }

  // componentDidMount() {
  //   UploadService.getFiles().then((response) => {
  //     this.setState({
  //       imageInfos: response.data.name,
  //     });
  //   });
  // }

  selectFile(event) {
    this.setState({
      currentFile: event.target.files[0],
      previewImage: URL.createObjectURL(event.target.files[0]),
      progress: 0,
    });
  }

  upload() {
    this.setState({
      progress: 0,
    });

    UploadService.upload(this.state.currentFile, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        console.log(response.data);

        const parent = this.state.message;
        parent.push(response.data.name.filename);
        this.setState({
          
          message: parent,
          // progress:0,
        });
        //    alert(
        //        "resp"
        //    )

        return UploadService.getFiles();
      })
      //   .then((files) => {
      //     this.setState({
      //       imageInfos: files.data.name.originalname,
      //     });
      //     alert("hello1")
      //     return UploadService.getFiles();
      //   })
      .catch((err) => {
        // this.setState({
        //   progress: 0,
        //   message: "Could not upload the image!",
        //   currentFile: undefined,
        alert("hello");
        // });
      });
  }
  showImage (i) {
    console.log("Checking the ",i)
    // axios.get("http:localhost:3000/file/:filename")
    // .then((res)=>{
    //           const parent  = info;
    //           parent.push(res.data.files[id].originalname)
    //           setInfo(parent)
    //           console.log(info);
    //           setDisplay(true)
    //           console.log("res",res.data.files[id].originalname)
              
    //         })
  //   window.open(`/file/${id}`)
  // window.location.href=`http://localhost:3000/files/${id}`
  window.open(`http://localhost:3000/files/${i}`)
   
  }

  render() {
    const {
      currentFile,
      previewImage,
      progress,
      message,
      imageInfos,
    } = this.state;

    return (
      <div >
      <center>
        <div className="row">
          <div className="col-8">
            <label className="btn btn-default p-0">
              <input type="file" accept="image/*" onChange={this.selectFile} />
            </label>
          </div>

          <div className="col-4">
            <button
              className="btn btn-success btn-sm"
              disabled={!currentFile}
              onClick={this.upload}
            >
              Upload
            </button>
          </div>
        </div>

        {currentFile && (
          <div className="progress my-3">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}

        {previewImage && (
          <div>
            <img className="preview" src={previewImage} alt="" />
          </div>
        )}

        
        

        <div className="card mt-3">
          <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {console.log("helloo", imageInfos)}

            {this.message &&
              this.message.map((i, index) => (
                <div>
                  {console.log("mapppp")}
                  <h1>hello</h1>
                  <li className="list-group-item" key={index}>
                    <h6>{i.originalname}</h6>
                  </li>
                </div>
              ))}
          </ul>
        </div>
        {console.log("Message", message)}
        {message && message.map((i,id) =>(
          <div
            className="alert alert-secondary mt-3"
            onClick={()=>this.showImage(i)}
            role="alert"
          >
            {i}
          </div>
        ))}
        </center>
      </div>
    );
  }
}
