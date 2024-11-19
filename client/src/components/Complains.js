import React from 'react'

export default function Complains() {
  return (
    <>
        <div class="container" id="Contact" style={{marginTop:"140px"}}>
            <div class="row h2 justify-content-center mt-md-5" style={{fontWeight: "bold"}}>
                If you need, Just drop us a line
            </div>
            <div class="row justify-content-center">
                Who are in extremely love with eco friendly system.
            </div>
        </div>
        <div class="container mt-5">
            <form action="">
                <div class="row form-inpt">
                    <div class="col-lg-6 ">
                        <input class="form-control mb-md-4" type="name" placeholder="Enter your name"
                            aria-label="default input example" required/>
                        <input class="form-control mb-md-4" type="email" placeholder="Enter your email"
                            aria-label="default input example"/>
                        <input class="form-control mb-md-4" type="text" placeholder="Enter your subject"
                            aria-label="default input example"/>
                    </div>
                    <div class="col-lg-6">
                        <div class="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"
                                placeholder="Message"></textarea>
                            <button class="submit-btn btn-primary">
                                SEND MESSAGE<i class="bi bi-arrow-right" style={{paddingLeft: "5px"}}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}
