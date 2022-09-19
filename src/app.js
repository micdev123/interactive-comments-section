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
};

window.addEventListener('DOMContentLoaded', () => {
    displayContents();
    handleComment();
    displayStoredComment()
    toggleReplyForm()
    displayReplies()
});

const comments_container1 = document.querySelector('.original');
const comments_container2 = document.querySelector('.added');
const showReplyForm = document.querySelector('.reply_btn');
const comment_form_container = document.querySelector('.comment_form');



const displayContents = () => {
    // Initializing the main_container innerHTML to ''
    comments_container1.innerHTML = "";
    // Map through data object
    let contents = data.comments.map((content) => {
        return `
        <!-- Single Comment -->
        <div class="comment" id=${content.user.username}>
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
                <form action="" class="form replyForm">
                    <img src=${data.currentUser.image.png} class="commenter img" alt="">
                    <!-- Textarea -->
                    <textarea name="" id="" placeholder="Write something..." class="reply_text" required ></textarea>
                    <button type="submit" class="reply__btn">Reply</button>
                </form>
            </div>
            <!-- Reply Container -->
            <div class="replies_container">
                <div class="border"></div>
                    <div class="replies">
                        ${content.replies.length > 0 ? `
                            <div class="reply_container">
                            ${content.replies.map((reply) => (`
                                <div class="reply" id=${reply.user.username}>
                                    <div class="reply_contents">
                                        <div class="scores">
                                            <div class="upvote">
                                                <img src="./images/icon-plus.svg" alt="plus">
                                            </div>
                                            <p class="score">${reply.score}</p>
                                            <div class="downvote">
                                                <img src="./images/icon-minus.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="reply_content">
                                            <div class="reply_head">
                                                <div>
                                                    <img src=${reply.user.image.png} alt="" class="img">
                                                    <p class="name">${reply.user.username}</p>
                                                    <p class="date">${reply.createdAt}</p>
                                                </div>
                                                <div class="reply_btn">
                                                    <img src="./images/icon-reply.svg" alt="reply_btn" class="img_reply">
                                                    <p>Reply</p>
                                                </div>
                                            </div>
                                            <div class="rely_body">
                                                <p>
                                                    <span>@${reply.replyingTo}</span> ${reply.content}
                                                </p>
                                            </div>
                                        </div>  
                                    </div>
                                    <div class="reply_form">
                                        <form action="" class="form replyForm">
                                            <img src=${data.currentUser.image.png} class="commenter img" alt="">
                                            <!-- Textarea -->
                                            <textarea name="" id="" placeholder="Write something..." class="reply_text" required></textarea>
                                            <button type="submit" class="reply__btn">Reply</button>
                                        </form>
                                    </div>
                                    <div class="reply_container_new_new"></div>
                                </div>
                            `)).join('')}
                            
                            </div>
                            `
                            : ''
                        }
                        
                        <div class="reply_container_new"></div>
                    </div>
                
            </div>

           

        </div>  
        `
    })
    contents = contents.join('');
    comments_container1.innerHTML = contents;

    // Comment form
    comment_form_container.innerHTML = `
        <form action="" class="form commentForm">
            <img src=${data.currentUser.image.png} class="commenter img" alt="">
            <!-- Textarea -->
            <textarea name="" id="comment_text" placeholder="Add a comment..." required ></textarea>
            <button type="submit" class="send">send</button>
        </form>
    `
}


const handleComment = () => {
    document.querySelector('.commentForm').addEventListener('submit', (e) => {
        e.preventDefault();

        // Getting comments from the local storage
        const storedComment = JSON.parse(localStorage.getItem('comments')) || [];

        // date format
        const options = { year: 'numeric', month: 'short', day: 'numeric' };

        // Get textarea value
        let textInput = document.getElementById('comment_text');

        if (textInput.value === "") {
            console.log('Field required');
        }
        else {
            let commentData = {
                id: storedComment.length > 0 ? storedComment.length + 3 : 3,
                commenterImg: data.currentUser.image.png,
                commenterName: data.currentUser.username,
                comment: textInput.value,
                timestamps: new Date().toLocaleDateString('en-US', options),
                scores: 0
            }

            // Push data to storage
            if (storedComment) {
                storedComment.push(commentData);

                // Store comment
                localStorage.setItem('comments', JSON.stringify(storedComment));

                textInput.value = '';
            }
            displayStoredComment()

        }
        
    })
    
}

const displayStoredComment = () => {
    comments_container2.innerHTML = " ";
    // Getting task from the local storage
    const storedComment = JSON.parse(localStorage.getItem('comments')) || [];
    let contents = storedComment.map((content, index) => {
        return `
        <!-- Single Comment -->
        <div class="comment">
            <div class="comment_contents">
                <!-- Scores -->
                <div class="scores">
                    <div class="upvote">
                        <img src="./images/icon-plus.svg" alt="plus">
                    </div>
                    <p class="score">${content.scores}</p>
                    <div class="downvote">
                        <img src="./images/icon-minus.svg" alt="">
                    </div>
                </div>
                <!-- Comment Content -->
                <div class="content">
                    <div class="comment_head">
                        <div>
                            <img src=${content.commenterImg} alt="" class="img">
                            <p class="name">${content.commenterName} <span>You</span></p>
                            <p class="date">${content.timestamps}</p>
                        </div>
                        <div class="btns">
                            <div class="delete" id=${index}>
                                <img src="./images/icon-delete.svg" alt="delete_btn" class="img_btn">
                                <p>Delete</p>
                            </div>
                            <div class="edit" id=${index}>
                                <img src="./images/icon-edit.svg" alt="edit_btn" class="img_btn">
                                <p>Edit</p>
                            </div>
                        </div> 
                    </div>
                    <!-- Comment Body -->
                    <div class="comment_body">
                        <p>
                            ${content.comment}
                        </p>
                    </div>
                </div>
            </div>
            <!-- Reply Form -->
            <div class="reply_form">
                <form action="" class="form replyForm">
                    <img src=${data.currentUser.image.png} class="commenter img" alt="">
                    <!-- Textarea -->
                    <textarea name="" id="" placeholder="Write something..."></textarea>
                    <button type="submit" class="reply__btn">Reply</button>
                </form>
            </div>
            <!-- Update Form -->
            <div class="update_form">
                <form action="" class="form updateForm">
                    <img src=${data.currentUser.image.png} class="commenter img" alt="">
                    <!-- Textarea -->
                    <textarea name="" id="" placeholder="Write something..."></textarea>
                    <button type="submit" class="update__btn">Update</button>
                </form>
            </div>
        </div>
        `
    });
    contents = contents.join('');
    // console.log(contents);

    comments_container2.innerHTML = contents

}




const toggleReplyForm = () => {
    document.querySelectorAll('.reply_btn').forEach((toggleForm) => {
        toggleForm.addEventListener('click', (e) => {
            // console.log('test');
            // Target parent
            const parent = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;

            // console.log(parent.id);

            // Target current reply-form-btn
            parent.querySelector('.reply_form').classList.toggle('visible')

            if (parent.querySelector('.reply_form').classList.contains('visible')) {
                parent.querySelector('.replyForm').addEventListener('submit', (e) => {
                    e.preventDefault()
                    console.log('active');
                    // Getting replies from the local storage
                    const storedReplies = JSON.parse(localStorage.getItem('replies_for_' + parent.id)) || [];

                    // date format
                    const options = { year: 'numeric', month: 'short', day: 'numeric' };

                    // Get textarea value
                    let inputText = parent.querySelector('.reply_text');

                    if (inputText.value === "") {
                        console.log("Field required!");
                    }
                    else {
                        let replyData = {
                            replierImg: data.currentUser.image.png,
                            replierName: data.currentUser.username,
                            reply: inputText.value,
                            replyingTo: parent.id,
                            timestamps: new Date().toLocaleDateString('en-US', options),
                            scores: 0
                        }

                        // Push data to storage
                        if (storedReplies) {
                            storedReplies.push(replyData);

                            // Store comment
                            localStorage.setItem('replies_for_' + parent.id, JSON.stringify(storedReplies));

                            inputText.value = '';
                        }
                        // displayStoredComment()
                        parent.querySelector('.reply_form').classList.remove('visible')
                    }
                     
                    
                })
            }

            replies(parent)
            
        })
    })

    
}


const displayReplies = () => {
    // target replies parent parent container
    document.querySelectorAll('.reply_btn').forEach((parent) => {
        const parent_element = parent.parentElement.parentElement.parentElement.parentElement
        // console.log(parent_element);
        replies(parent_element)
        commentActions(parent_element)
    })
}

const replies = (parent) => {
    // console.log(parent);
    // Getting replies from the local storage
    const storedReplies = JSON.parse(localStorage.getItem('replies_for_' + parent.id)) || [];
    // console.log(storedReplies);

    if (storedReplies.length > 0) {
        let outputReplies = storedReplies.map((reply, index) => {
            if (reply.replyingTo === parent.id) {
                // Target parent child reply container to output replies
                return`
                <div class="reply" id=''>
                    <div class="reply_contents">
                        <div class="scores">
                            <div class="upvote">
                                <img src="./images/icon-plus.svg" alt="plus">
                            </div>
                            <p class="score">${reply.scores}</p>
                            <div class="downvote">
                                <img src="./images/icon-minus.svg" alt="">
                            </div>
                        </div>
                        <div class="reply_content">
                            <div class="reply_head">
                                <div>
                                    <img src=${reply.replierImg} alt="" class="img">
                                    <p class="name">${reply.replierName} <span>You</span></p>
                                    <p class="date">${reply.timestamps}</p>
                                </div>
                                <div class="btns">
                                    <div class="delete" id=${index}>
                                        <img src="./images/icon-delete.svg" alt="delete_btn" class="img_btn">
                                        <p>Delete</p>
                                    </div>
                                    <div class="edit" id=${index}>
                                        <img src="./images/icon-edit.svg" alt="edit_btn" class="img_btn">
                                        <p>Edit</p>
                                    </div>
                                </div>
                            </div>
                            <div class="rely_body">
                                <p>
                                    <span>@${reply.replyingTo}</span> ${reply.reply}
                                </p>
                            </div>
                        </div>  
                    </div>
                    <div class="update_form">
                        <form action="" class="form updateForm">
                            <img src=${data.currentUser.image.png} class="commenter img" alt="">
                            <!-- Textarea -->
                            <textarea name="" id="" placeholder="Write something..."></textarea>
                            <button type="submit" class="update__btn">Update</button>
                        </form>
                    </div>
                </div>`
            }
        })

        outputReplies = outputReplies.join('');

        if (parent.classList.contains('comment')) {
            parent.querySelector('.reply_container_new').innerHTML = outputReplies;
        }  
        else {
            parent.querySelector('.reply_container_new_new').innerHTML = outputReplies;
            
        }
        
    }

    

    
}


const commentActions = (parent) => {
    // console.log(parent);
    const storedReplies = JSON.parse(localStorage.getItem('replies_for_' + parent.id)) || [];
    storedReplies.map((reply) => {
        parent.querySelectorAll('.edit').forEach((edit_btn) => {
            edit_btn.addEventListener('click', (e) => {
                console.log(e.target);
            })
        });
    })
    
    
}







