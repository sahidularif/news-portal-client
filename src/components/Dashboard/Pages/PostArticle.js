import React, { useState } from "react";
import { useForm } from "react-hook-form";

const PostArticle = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [info, setInfo] = useState({
    author: "",
    title: "",
    category: "",
    article: "",
  });

  // Handle input
  const handleBlur = (e) => {
    const newService = { ...info };
    newService[e.target.name] = e.target.value;
    setInfo(newService);
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    console.log(newFile);
    setFile(newFile);
  };

  // When form submitted:
  const handleFormSubmit = () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('author', info.author);
    formData.append('category', info.category);
    formData.append('title', info.title);
    formData.append('article', info.article);

    fetch('https://aqueous-fortress-58437.herokuapp.com/post-article', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        response.json()
        setSuccess(true)
      })
      .then((data) => {
        setTimeout(() => {
          setSuccess(false)
        }, 3000);
        // handleServiceUpdate();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-3 justify-content-center">
        <div className="col-md-6">
          {
            success && (
              <div className="col-md-8 alert alert-success" role="alert">
                <span><i class="fas fa-check-circle"></i> Article successfully published!</span>
              </div>
            )
          }
        </div>
      </div>
      <div className="row m-0 p-0 justify-content-center mt-5">
        <div className="col-md-10 entry-form p-5">
          <form
            className="row g-3 text-start"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <div class="col-md-9">
              <label for="first_name" className="form-label">
                Author Name
              </label>
              <input
                type="text"
                name="author"
                className="form-control"
                id="author"
                onBlur={handleBlur}
                ref={register({ required: true })}
              />
              {errors.author && (
                <span>
                  <i class="fas fa-exclamation-triangle"></i> This field is
                  required
                </span>
              )}
            </div>
            <div className="col-md-3">
              <label for="email" className="form-label">
                Article Category
              </label>
              <select
                className="form-select"
                name="category"
                onChange={handleBlur}
                id="category"
                ref={register({ required: true })}
              >
                <option selected>Choose...</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
                <option value="politics">Politics</option>
                <option value="sports">Sports</option>
              </select>
              {errors.category && (
                <span>
                  <i className="fas fa-exclamation-triangle"></i> This field is
                  required
                </span>
              )}
            </div>
            <div className="col-md-12">
              <label for="first_name" className="form-label">
                Article Title
              </label>
              <input
                type="text"
                name="title"
                className="form-control"
                id="title"
                onBlur={handleBlur}
                ref={register({ required: true })}
              />
              {errors.title && (
                <span>
                  <i class="fas fa-exclamation-triangle"></i> This field is
                  required
                </span>
              )}
            </div>
            <div className="col-md-12">
              <label for="exampleFormControlTextarea1" class="form-label">
                Article
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="article"
                onBlur={handleBlur}
                ref={register({ required: true })}
              ></textarea>
              {errors.article && (
                <span>
                  <i class="fas fa-exclamation-triangle"></i> This field is
                  required
                </span>
              )}
            </div>
            <div className="col-md-7">
              <div className="input-group">
                <input
                  type="file"
                  class="form-control"
                  id="inputGroupFile04"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                  name="image"
                  onChange={handleFileChange}
                  ref={register({ required: true })}
                />
                {errors.image && (
                  <span>
                    <i class="fas fa-exclamation-triangle"></i> This field is
                    required
                  </span>
                )}
              </div>
            </div>

            <div className="col-md-5">
              <button type="submit" className="btn btn-submit w-100">
                Submit Article
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostArticle;
