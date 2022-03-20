import React from "react"

import News from './News.js'

function PageNews({news}) {
    return (
        <>
            <div className="container-fluid pd-header">
                <div className="pd-w-100 section-Chapter">
                    <div className="text-center fs-3">
                        <i className="fas fa-newspaper fs-4 color-primary" /> Tin tức
                    </div>
                    <div className="preview-News mt-5">
                        <div className="row my-3">
                            {news.map((neww,index)=><News key={index} data={neww}/>)}
                        </div>
                    </div>
              
                </div>
            </div>
        </>
    )
}

export default PageNews