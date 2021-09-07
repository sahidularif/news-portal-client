import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddAdmin = () => {
    const [success, setSuccess] = useState(false)
    // handle Add admin when form Submit:
    const onSubmit = (data) => {
        const newAdmin = { ...data };
        console.log('new ad', newAdmin);

        fetch('https://aqueous-fortress-58437.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAdmin),
        })
            .then((res) => {
                res.json();
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                }, 3000);
            })
            .then((data) => {
                setTimeout(() => {
                    setSuccess(false)
                }, 3000);
            });
    };

    // React hook form for validation and error message
    const { register, handleSubmit, errors } = useForm();

    return (
        <div className='rounded bg-white p-5'>
            <div className="row justify-content-center mb-5">
               <div className="col-md-8">
               {
                    success && (
                        <div className="col-md-8 alert alert-success" role="alert">
                            <span><i class="fas fa-check-circle"></i> Admin email successfully added!</span>
                        </div>
                    )
                }
               </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className='col-md-6 d-flex'>
                        <div className='form-group mr-3 w-100'>
                            <input
                                className='form-control'
                                name='email'
                                type='email'
                                placeholder='admin@truthspeech.com'
                                ref={register({ required: true })}
                            />
                            {errors.email && <span className='error'>Email is required</span>}
                        </div>

                        <div className='text-left'>
                            <button type='submit' className='btn btn-admin'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddAdmin;