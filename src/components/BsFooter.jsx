import React from 'react'

function BsFooter() {
    return (
        <>
            <footer style={{backgroundColor: '#333', color: '#fff', padding: '20px 0', marginTop: '20px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <h5>About Us</h5>
                            <p>We are a company dedicated to providing high-quality products and excellent customer service.</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h5>Quick Links</h5>
                            <ul style={{listStyleType: 'none', paddingLeft: '0'}}>
                                <li><a href="#" style={{color: '#fff', textDecoration: 'none'}}>Home</a></li>
                                <li><a href="#" style={{color: '#fff', textDecoration: 'none'}}>Products</a></li>
                                <li><a href="#" style={{color: '#fff', textDecoration: 'none'}}>About</a></li>
                                <li><a href="#" style={{color: '#fff', textDecoration: 'none'}}>Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <address>
                                <p>123 Main Street<br />City, State 12345</p>
                                <p>Email: info@example.com<br />Phone: (123) 456-7890</p>
                            </address>
                        </div>
                    </div>
                    <hr style={{borderColor: '#555'}} />
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start">
                                <p>&copy; 2024 Your Company Name. All rights reserved.</p>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <a href="#" style={{color: '#fff', margin: '0 10px'}}>Facebook</a>
                                <a href="#" style={{color: '#fff', margin: '0 10px'}}>Twitter</a>
                                <a href="#" style={{color: '#fff', margin: '0 10px'}}>Instagram</a>
                                <a href="#" style={{color: '#fff', margin: '0 10px'}}>LinkedIn</a>
                            </div>
                        </div>
                </div>
            </footer>
        </>
    )
}

export default BsFooter