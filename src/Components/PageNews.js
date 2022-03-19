import React from "react"
import { Link } from "react-router-dom";
import { useState, useLayoutEffect } from "react"
import axios from 'axios'
import News from './News.js'

function PageNews({news}) {
    console.log("pageNews:",News);
    return (
        <>
            <div className="container-fluid pd-header">
                <div className="pd-w-100 section-Chapter">
                    <div className="text-center fs-3">
                        <i className="fas fa-newspaper fs-4 color-primary" /> Tin tức
                    </div>
                    <div className="preview-News mt-5">
                        <div className="row my-3">
                            {news.map((neww)=><News data={neww}/>)}
                        </div>
                    </div>
              
                </div>
            </div>
        </>
    )
}

export default PageNews