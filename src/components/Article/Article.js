import React from 'react';

function Article(props) {
    console.log(props)
    return (
        <div className="flex flex-col items-center w-full h-max p-5 border-solid border-black border-2 mb-4">
            <h1 className="text-xl mb-4">This is a title</h1>
            <h3 className="text-xs mb-4">lorem
                This is a description Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, delectus non? Fuga illum animi veniam tempore repellat quidem. Maxime, voluptatem mollitia consectetur odio quibusdam beatae doloremque obcaecati quod provident cupiditate.</h3>
            {/* <img src={props.info.urlToImage} alt="image from article"></img> */}
            <a className="mt-4 px-2 py-1 hover:bg-black hover:text-white rounded-full" href="" target="_blank">Read More</a>
        </div >
    )
}

export default Article;
