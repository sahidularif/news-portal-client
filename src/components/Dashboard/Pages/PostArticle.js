import React, { useState } from "react";
import { useForm } from "react-hook-form";

const PostArticle = () => {
  const [success, setSuccess] = useState(false);
  const [employee, setEmployee] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // When form submitted:
  const onSubmit = (data) => {
    // let employee = JSON.stringify(data);
    // // console.log(data)
    // fetch("https://immense-sea-72965.herokuapp.com/customers", {
    //     method: "POST",
    //     headers: { 'Content-Type': 'application/json' },
    //     body: employee,
    // })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setSuccess(true);
    //         // console.log(data)
    //         // console.log((success));
    //     });
  };

  return (
    <div className="container-fluid">
      <div className="row m-0 p-0 justify-content-center mt-5">
        <div className="col-md-10 entry-form p-5">
          <form
            className="row g-3 text-start"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div class="col-md-9">
              <label for="first_name" className="form-label">
                Author Name
              </label>
              <input
                type="text"
                name="first_name"
                className="form-control"
                id="first_name"
                {...register("first_name", { required: true })}
              />
              {errors.first_name && (
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
                class="form-select"
                name="category"
                id="autoSizingSelect"
                {...register("category", { required: true })}
              >
                <option selected>Choose...</option>
                <option value="1">Business</option>
                <option value="2">Technology</option>
                <option value="3">Politics</option>
                <option value="3">Sports</option>
              </select>
              {errors.category && (
                <span>
                  <i class="fas fa-exclamation-triangle"></i> This field is
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
                name="first_name"
                className="form-control"
                id="first_name"
                {...register("first_name", { required: true })}
              />
              {errors.first_name && (
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
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="article"
                {...register("article", { required: true })}
              ></textarea>
              {errors.article && (
                <span>
                  <i class="fas fa-exclamation-triangle"></i> This field is
                  required
                </span>
              )}
            </div>
            <div className="col-md-7">
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  id="inputGroupFile04"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                  name="image"
                  {...register("image", { required: true })}
                />
                {errors.article && (
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
