const data = {
    "currentUser": {
        "image": { 
            "png": "./images/avatars/image-juliusomo.png",
            "webp": "./images/avatars/image-juliusomo.webp"
        },
        "username": "juliusomo"
    },
    "comments": [
        {
            "id": 1,
            "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
            "createdAt": "1 month ago",
            "score": 12,
            "user": {
                "image": { 
                "png": "./images/avatars/image-amyrobson.png",
                "webp": "./images/avatars/image-amyrobson.webp"
                },
                "username": "amyrobson"
            },
            "replies": []
        },
        {
            "id": 2,
            "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            "createdAt": "2 weeks ago",
            "score": 5,
            "user": {
                "image": { 
                    "png": "./images/avatars/image-maxblagun.png",
                    "webp": "./images/avatars/image-maxblagun.webp"
                },
                "username": "maxblagun"
            },
            "replies": [
                {
                    "id": 3,
                    "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                    "createdAt": "1 week ago",
                    "score": 4,
                    "replyingTo": "maxblagun",
                    "user": {
                        "image": { 
                            "png": "./images/avatars/image-ramsesmiron.png",
                            "webp": "./images/avatars/image-ramsesmiron.webp"
                        },
                        "username": "ramsesmiron"
                    }
                },
                {
                    "id": 4,
                    "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                    "createdAt": "2 days ago",
                    "score": 2,
                    "replyingTo": "ramsesmiron",
                    "user": {
                        "image": { 
                            "png": "./images/avatars/image-juliusomo.png",
                            "webp": "./images/avatars/image-juliusomo.webp"
                        },
                        "username": "juliusomo"
                    }
                }
            ]
        }
    ]
}

window.addEventListener('DOMContentLoaded', (event) => {
    displayContents();
    // hightStyle();
});

const comments_container = document.querySelector('.comments');
const form_container = document.querySelector('.comment_form');

const displayContents = () => {
    // Initializing the main_container innerHTML to ''
    comments_container.innerHTML = "";
    // Map through data object
    let contents = data.comments.map((content) => {
        return `
        <!-- Single Comment -->
        <div class="comment">
            <div class="comment_contents">
                <!-- Scores -->
                <div class="scores">
                    <div class="upvote">
                        <img src="./images/icon-plus.svg" alt="plus">
                    </div>
                    <p class="score">${content.score}</p>
                    <div class="downvote">
                        <img src="./images/icon-minus.svg" alt="">
                    </div>
                </div>
                <!-- Comment Content -->
                <div class="content">
                    <div class="comment_head">
                        <div>
                            <img src=${content.user.image.png} alt="" class="img">
                            <p class="name">${content.user.username}</p>
                            <p class="date">${content.createdAt}</p>
                        </div>
                        <div class="reply_btn">
                            <img src="./images/icon-reply.svg" alt="reply_btn" class="img_reply">
                            <p>Reply</p>
                        </div> 
                    </div>
                    <!-- Comment Body -->
                    <div class="comment_body">
                        <p>
                            ${content.content}
                        </p>
                    </div>
                </div>
            </div>
            <div class="reply_form">
                <form action="" class="form">
                    <img src="./images/avatars/image-amyrobson.png" class="commenter img" alt="">
                    <!-- Textarea -->
                    <textarea name="" id="" placeholder="Write something..."></textarea>
                    <button type="submit" class="reply__btn">Reply</button>
                </form>
            </div>
            <!-- Reply Container -->
            ${content.replies.length > 0 ? (`
                <div class="replies">
                    ${content.replies.length > 0 ? `<div class="border"></div>` : (``)}
                    <div class="reply_container">
                    ${content.replies.map((reply) => (`
                        <div class="reply">
                            <div class="reply_contents">
                                <div class="scores">
                                    <div class="upvote">
                                        <img src="./images/icon-plus.svg" alt="plus">
                                    </div>
                                    <p class="score">5</p>
                                    <div class="downvote">
                                        <img src="./images/icon-minus.svg" alt="">
                                    </div>
                                </div>
                                <div class="reply_content">
                                    <div class="reply_head">
                                        <div>
                                            <img src="./images/avatars/image-amyrobson.png" alt="" class="img">
                                            <p class="name">amyrobson</p>
                                            <p class="date">1 month ago</p>
                                        </div>
                                        <div class="reply_btn">
                                            <img src="./images/icon-reply.svg" alt="reply_btn" class="img_reply">
                                            <p>Reply</p>
                                        </div>
                                    </div>
                                    <div class="rely_body">
                                        <p>
                                            <span>@maxblagun</span> If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very
                                            tempting to jump ahead but lay a solid foundation first.
                                        </p>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    `)).join('')}
                    </div>
                </div>
            `) : ''}
        </div>  
        `
    })
    contents = contents.join('');
    comments_container.innerHTML = contents;

    // form_container
    form_container.innerHTML = `
    <form action="" class="form">
        <img src=${data.currentUser.image.png} class="commenter img" alt="">
        <!-- Textarea -->
        <textarea name="" id="" placeholder="Add a comment..."></textarea>
        <button type="submit" class="send">send</button>
    </form>
    `
}

const handleComment = (e) => {
    e.preventDefault();

    console.log('working');
}