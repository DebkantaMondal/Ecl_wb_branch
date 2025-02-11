import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import axios from "axios";

function FileUpload() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    // axios
    //   .post("http://localhost:5000/emp_content_upload", data)
    //   .then(function (response) {
    //     console.log(response.data);
    //     alert(response.data.message);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  return (
    <div className=" py-[5rem] capitalize  flex flex-col justify-center items-center p-4 ">
      <p className="text-3xl pb-2">upload a document</p>
      <Form
        className="border-[1px] p-6 rounded-lg border-slate-400 w-[400px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Field>
          <label>Document no</label>

          <input
            placeholder="Enter Document no"
            type="text"
            {...register("DocumentNo", {
              required: true,
              minLength: 8,
              maxLength: 8,
            })}
          />
        </Form.Field>{" "}
        {errors.DocumentNo && <p>Please check the DocumentNo</p>}
        <Form.Field>
          <label>upload image</label>

          <input
            placeholder="upload image"
            type="file"
            {...register("file", {
              required: true,
            })}
          />
        </Form.Field>{" "}
        {errors.file && errors.file.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.file && errors.file.type === "validate" && (
          <span>File size should be less than or equal to 1MB</span>
        )}
        <div className="text-center mt-12">
          <button
            type="submit"
            className="border-[2px] p-1 rounded-lg text-lg px-6  border-slate-400"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export default FileUpload;
