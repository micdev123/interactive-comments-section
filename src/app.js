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
    displayStoredComment();
    toggleReplyForm();
    displayReplies();
    // commentActions();
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
                <div class="scores_big">
                    <div class="upvote">
                        <img src="./images/icon-plus.svg" alt="plus" class='upvote_btn_'>
                    </div>
                    <p class="score">${content.score}</p>
                    <div class="downvote">
                        <img src="./images/icon-minus.svg" alt="" class="downvote_btn_">
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
                        <p class="reply_btn">
                            Reply
                        </p>
                    </div>
                    <!-- Comment Body -->
                    <div class="comment_body">
                        <p>
                            ${content.content}
                        </p>
                    </div>
                    <div class="mobile_view">
                        <div class="scores_mobile">
                            <div class="upvote">
                                <img src="./images/icon-plus.svg" alt="plus" class='upvote_btn_'>
                            </div>
                            <p class="score">${content.score}</p>
                            <div class="downvote">
                                <img src="./images/icon-minus.svg" alt="" class='downvote_btn_'>
                            </div>
                        </div>
                        <p class="reply_btn">
                            Reply
                        </p>
                    </div>
                </div>
                
            </div>

            <!-- Reply Form -->
            <div class="reply_form">
                <form action="" class="form replyForm">
                    <img src=${data.currentUser.image.png} class="commenter img" alt="">
                    <!-- Textarea -->
                    <textarea name="" id="" placeholder="Write something..." class="reply_text" required ></textarea>
                    <button type="submit" class="reply__btn">Reply</button>
                    <div class="mobile_view">
                        <img src=${data.currentUser.image.png} class="commenter img" alt="">
                        <button type="submit" class="reply__btn">Reply</button>
                    </div>
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
                                        <div class="scores_big">
                                            <div class="upvote">
                                                <img src="./images/icon-plus.svg" alt="plus" class='upvote_btn_'>
                                            </div>
                                            <p class="score">${reply.score}</p>
                                            <div class="downvote">
                                                <img src="./images/icon-minus.svg" alt="" class='downvote_btn_'>
                                            </div>
                                        </div>

                                        <div class="reply_content">
                                            <div class="reply_head">
                                                <div>
                                                    <img src=${reply.user.image.png} alt="" class="img">
                                                    <p class="name">${reply.user.username}</p>
                                                    <p class="date">${reply.createdAt}</p>
                                                </div>
                                                <p class="reply_btn">
                                                    Reply
                                                </p>
                                            </div>
                                            <!-- Reply Body -->
                                            <div class="reply_body">
                                                <p>
                                                    <span>@${reply.replyingTo}</span> ${reply.content}
                                                </p>
                                            </div>

                                            <!-- Reply Mobile View -->
                                            <div class="mobile_view">
                                                <div class="scores_mobile">
                                                    <div class="upvote">
                                                        <img src="./images/icon-plus.svg" alt="plus" class='upvote_btn_'>
                                                    </div>
                                                    <p class="score">${content.score}</p>
                                                    <div class="downvote">
                                                        <img src="./images/icon-minus.svg" alt="" class='downvote_btn_'>
                                                    </div>
                                                </div>
                                                <p class="reply_btn">
                                                    Reply
                                                </p>
                                            </div>
                                        </div> 
                                    </div>

                                    <!-- Reply Form -->
                                    <div class="reply_form">
                                        <form action="" class="form replyForm">
                                            <img src=${data.currentUser.image.png} class="commenter img" alt="">
                                            <!-- Textarea -->
                                            <textarea name="" id="" placeholder="Write something..." class="reply_text" required></textarea>
                                            <button type="submit" class="reply__btn">Reply</button>
                                            <div class="mobile_view">
                                                <img src=${data.currentUser.image.png} class="commenter img" alt="">
                                                <button type="submit" class="reply__btn">Reply</button>
                                            </div>
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
            <div class="mobile_view">
                <img src=${data.currentUser.image.png} class="commenter img" alt="">
                <button type="submit" class="send">send</button>
            </div>
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

                displayStoredComment()
            }
            

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
                <div class="scores_big">
                    <div class="upvote">
                        <img src="./images/icon-plus.svg" alt="plus" class='upvote_btn' id=${index}>
                    </div>
                    <p class="score">${content.scores}</p>
                    <div class="downvote">
                        <img src="./images/icon-minus.svg" alt="" class='downvote_btn' id=${index}>
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
                            <p class="comment_delete" id=${index}>
                                Delete
                            </p>
                            <p class="comment_edit" id=${index}>
                                Edit
                            </p>
                        </div> 
                    </div>
                    <!-- Comment Body -->
                    <div class="comment_body">
                        <p>
                            ${content.comment}
                        </p>
                    </div>
                    <!-- Update Form -->
                    <div class="update_form">
                        <form action="" class="form updateForm">
                            <!-- Textarea -->
                            <textarea name="" class="update_text" placeholder="Write something..."></textarea>
                            <input type="hidden" class="edited_content">
                            <button type="submit" class="update__btn">Update</button>
                        </form>
                    </div>
                    <div class="mobile_view">
                        <div class="scores_mobile">
                            <div class="upvote">
                                <img src="./images/icon-plus.svg" alt="plus" class='upvote_btn' id=${index}>
                            </div>
                            <p class="score">${content.scores}</p>
                            <div class="downvote">
                                <img src="./images/icon-minus.svg" alt="" class='downvote_btn' id=${index}>
                            </div>
                        </div>
                        <div class="btns">
                            <p class="comment_delete" id=${index}>
                                Delete
                            </p>
                            <p class="comment_edit" id=${index}>
                                Edit
                            </p>
                        </div> 
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
            
        </div>
        `
    });
    contents = contents.join('');
    // console.log(contents);

    comments_container2.innerHTML = contents
    
    commentActions()
}



const toggleReplyForm = () => {
    document.querySelectorAll('.reply_btn').forEach((toggleForm) => {
        toggleForm.addEventListener('click', (e) => {
            // console.log('test');
            // Target parent
            const parent = e.target.parentElement.parentElement.parentElement.parentElement;

            console.log(parent.id);

            // Target current reply-form-btn
            parent.querySelector('.reply_form').classList.toggle('visible')

            // Creating replies
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
                            // Add replies
                            storedReplies.push(replyData);

                            // Store replies
                            localStorage.setItem('replies_for_' + parent.id, JSON.stringify(storedReplies));

                            // Reset inputText value
                            inputText.value = '';
                        }
                        // displayStoredComment()
                        // Remove the visible class
                        parent.querySelector('.reply_form').classList.remove('visible');

                        // Display replies
                        displayReplies()
                    }
                     
                    
                })
            }

            // replies(parent)
            
        })
    })


}


const displayReplies = () => {
    // target replies parent parent container
    document.querySelectorAll('.reply_btn').forEach((parent) => {
        const parent_element = parent.parentElement.parentElement.parentElement.parentElement
        // console.log(parent_element);
        replies(parent_element)
        replyActions(parent_element)
        
    })
    
    
}


const replies = (parent) => {
    // console.log(parent);
    // Getting replies from the local storage
    const storedReplies = JSON.parse(localStorage.getItem('replies_for_' + parent.id)) || [];
    // console.log(storedReplies);
    let outputReplies = storedReplies.map((reply, index) => {
        if (reply.replyingTo == parent.id) {
            // Target parent child reply container to output replies
            return`
            <div class="reply" id=${reply.replyingTo}>
                <div class="reply_contents">
                    <div class="scores_big">
                        <div class="upvote">
                            <img src="./images/icon-plus.svg" alt="plus" class='upvote_btn' id=${index}>
                        </div>
                        <p class="score">${reply.scores}</p>
                        <div class="downvote">
                            <img src="./images/icon-minus.svg" alt="" class='downvote_btn' id=${index}>
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
                                <p class="reply_delete" id=${index}>
                                    Delete
                                </p>
                                <p class="reply_edit" id=${index}>
                                    Edit
                                </p>
                            </div>
                        </div>
                        <div class="reply_body">
                            <p>
                                <span>@${reply.replyingTo}</span> ${reply.reply}
                            </p>
                        </div>

                        <div class="update_form">
                            <form action="" class="form updateForm">
                                <!-- Textarea -->
                                <textarea name="" class="update_text" placeholder="Write something..."></textarea>
                                <input type="hidden" class="edited_content">
                                <button type="submit" class="update__btn">Update</button>
                            </form>
                        </div>

                        <div class="mobile_view">
                            <div class="scores_mobile">
                                <div class="upvote">
                                    <img src="./images/icon-plus.svg" alt="plus" class='upvote_btn' id=${index}>
                                </div>
                                <span class="score">${reply.scores}</span>
                                <div class="downvote">
                                    <img src="./images/icon-minus.svg" alt="" class='downvote_btn' id=${index}>
                                </div>
                            </div>
                            <div class="btns">
                                <p class="reply_delete" id=${index}>
                                    Delete
                                </p>
                                <p class="reply_edit" id=${index}>
                                    Edit
                                </p>
                            </div>
                        </div>
                    </div>  
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


const replyActions = (parent) => {
    // console.log(parent);
    
    const storedReplies = JSON.parse(localStorage.getItem('replies_for_' + parent.id)) || [];

    // Reply edit
    parent.querySelectorAll('.reply_edit').forEach((edit_btn) => {
        edit_btn.addEventListener('click', (e) => {
            let target_index = e.target
            // console.log(e.target);
            // Target top parent element
            let parent_container = target_index.parentElement.parentElement.parentElement.parentElement.parentElement
            // console.log(parent_container);

            let target_reply_body = target_index.parentElement.parentElement.parentElement.parentElement.querySelector('.reply_body')
            // console.log(target_reply_contents);

            // Target current update-form
            parent_container.querySelector('.update_form').classList.toggle('visible')

            if (parent_container.querySelector('.update_form').classList.contains('visible')) {
                target_reply_body.style.display = 'none'

                let textarea_input = parent_container.querySelector('.update_text')
                textarea_input.value = storedReplies[target_index.id].reply

                parent_container.querySelector('.updateForm').addEventListener('submit', (e) => {
                    e.preventDefault();
                    let saveIndex = parent_container.querySelector(".edited_content");
                    saveIndex = textarea_input.value
                    
                    storedReplies[target_index.id].reply = saveIndex;

                    // Store updated replies
                    localStorage.setItem('replies_for_' + parent.id, JSON.stringify(storedReplies));

                    // Reset textarea_input value
                    textarea_input.value = '';

                    // Setting back target_reply_body display style to block
                    target_reply_body.style.display = 'block'

                    // Remove visible class from the update form
                    parent_container.querySelector('.update_form').classList.remove('visible')

                    // Call the displayReplies() fnx
                    displayReplies()
                })
            }
            else {
                // Setting back target_reply_body display style to block
                target_reply_body.style.display = 'block'
            }
        })
    });

    // Reply delete
    parent.querySelectorAll('.reply_delete').forEach((trash_btn) => {
        trash_btn.addEventListener('click', (e) => {
            let target_index_delete = e.target
            // console.log(e.target);
            // Target top parent element
            document.querySelector('.delete_modal').style.display = 'block'

            // Delete modal cancel btn
            document.querySelector('.cancel').addEventListener('click', () => {
                // Set modal display to none
                 document.querySelector('.delete_modal').style.display = 'none'
            })
           

            // Delete modal continue btn
            document.querySelector('.continue').addEventListener('click', () => {
                // console.log('yes');
                storedReplies.splice(target_index_delete.id, 1);

                // Store updated replies
                localStorage.setItem('replies_for_' + parent.id, JSON.stringify(storedReplies));

                
                // Set modal display to none
                document.querySelector('.delete_modal').style.display = 'none'

                // Call the displayReplies() fnx
                displayReplies()
            })
            displayReplies()

        })
    });

    // Upvote scores
    parent.querySelectorAll('.upvote_btn').forEach((add_scores) => {
        add_scores.addEventListener('click', (e) => {
            // console.log(e.target);
            let target_upvote = e.target
            let target_scores = target_upvote.parentElement.parentElement.querySelector('.score')
            // console.log(target_scores);

            storedReplies[target_upvote.id].scores += 1;
            // Store updated replies
            localStorage.setItem('replies_for_' + parent.id, JSON.stringify(storedReplies));
            target_scores.textContent = storedReplies[target_upvote.id].scores
        })
    })

    // Downvote scores
    parent.querySelectorAll('.downvote_btn').forEach((reduce_scores) => {
        reduce_scores.addEventListener('click', (e) => {
            let target_downvote = e.target
            let target_scores = target_downvote.parentElement.parentElement.querySelector('.score')
            // console.log(target_scores);

            if (storedReplies[target_downvote.id].scores > 0) {
                storedReplies[target_downvote.id].scores -= 1;
                // Store updated replies
                localStorage.setItem('replies_for_' + parent.id, JSON.stringify(storedReplies));
                target_scores.textContent = storedReplies[target_downvote.id].scores
            }
            
        })
    })

    
}


const commentActions = () => {
    // Getting comments from the local storage
    const storedComment = JSON.parse(localStorage.getItem('comments')) || [];

    // Comment edit
    document.querySelectorAll('.comment_edit').forEach((comment_edit_btn) => {
        comment_edit_btn.addEventListener('click', (e) => {
            let target_btn_index = e.target
            // console.log(e.target);
            // Target top parent element
            let parent_container = target_btn_index.parentElement.parentElement.parentElement
            console.log(parent_container);

            let target_comment_body = parent_container.querySelector('.comment_body')
            // console.log(target_comment_body);

            // Target current update-form
            parent_container.querySelector('.update_form').classList.add('visible')

            if (parent_container.querySelector('.update_form').classList.contains('visible')) {
                target_comment_body.style.display = 'none'

                let textarea_input = parent_container.querySelector('.update_text')
                textarea_input.value = storedComment[target_btn_index.id].comment

                parent_container.querySelector('.updateForm').addEventListener('submit', (e) => {
                    e.preventDefault();
                    let saveIndex = parent_container.querySelector(".edited_content");
                    saveIndex = textarea_input.value
                    
                    storedComment[target_btn_index.id].comment = saveIndex;

                    // Store updated comment
                    localStorage.setItem('comments', JSON.stringify(storedComment));

                    // Reset textarea_input value
                    textarea_input.value = '';

                    // Setting back target_reply_body display style to block
                    target_comment_body.style.display = 'block'

                    // Remove visible class from the update form
                    parent_container.querySelector('.update_form').classList.remove('visible')

                    // Call the displayStoredComment() fnx
                    displayStoredComment()
                })
            }
            else {
                // Setting back target_reply_body display style to block
                target_comment_body.style.display = 'block'
            }
        })
    });
    
    
    // Comment delete
    document.querySelectorAll('.comment_delete').forEach((trash_btn) => {
        trash_btn.addEventListener('click', (e) => {
            let target_index_delete = e.target
            // console.log(e.target);
            // Target top parent element
            document.querySelector('.delete_modal').style.display = 'block'

            // Delete modal cancel btn
            document.querySelector('.cancel').addEventListener('click', () => {
                // Set modal display to none
                 document.querySelector('.delete_modal').style.display = 'none'
            })
           

            // Delete modal continue btn
            document.querySelector('.continue').addEventListener('click', () => {
                // console.log('yes');
                storedComment.splice(target_index_delete.id, 1);

                // Store updated comment
                localStorage.setItem('comments', JSON.stringify(storedComment));

                // Set modal display to none
                document.querySelector('.delete_modal').style.display = 'none'

                 // Call the displayStoredComment() fnx
                displayStoredComment()
            })
            
            // Call the displayStoredComment() fnx
            displayStoredComment()

        })
    });

    // Comment upvote scores
    document.querySelectorAll('.upvote_btn').forEach((add_scores) => {
        add_scores.addEventListener('click', (e) => {
            let target_upvote_btn = e.target
            let target_scores = target_upvote_btn.parentElement.parentElement.querySelector('.score')
            // console.log(target_scores);
            storedComment[target_upvote_btn.id].scores += 1;

            // Store updated scores
            localStorage.setItem('comments', JSON.stringify(storedComment));

            target_scores.textContent = storedComment[target_upvote_btn.id].scores;
        })
    })

    // Comment downvote scores
    document.querySelectorAll('.downvote_btn').forEach((reduce_scores) => {
        reduce_scores.addEventListener('click', (e) => {
            let target_downvote_btn = e.target
            let target_scores = target_downvote_btn.parentElement.parentElement.querySelector('.score')
            // console.log(target_scores);

            if (storedComment[target_downvote_btn.id].scores > 0) {
                storedComment[target_downvote_btn.id].scores -= 1;

                // Store updated scores
                localStorage.setItem('comments', JSON.stringify(storedComment));
                target_scores.textContent = storedComment[target_downvote_btn.id].scores
            }
        })
    })

    // Comment upvote scores
    document.querySelectorAll('.upvote_btn_').forEach((add_scores) => {
        add_scores.addEventListener('click', (e) => {
            let target_upvote_btn = e.target
            let target_scores = target_upvote_btn.parentElement.parentElement.querySelector('.score')

            target_scores.textContent = Number(target_scores.textContent) + 1;
        })
    })

    // Comment downvote scores
    document.querySelectorAll('.downvote_btn_').forEach((reduce_scores) => {
        reduce_scores.addEventListener('click', (e) => {
            let target_downvote_btn = e.target
            let target_scores = target_downvote_btn.parentElement.parentElement.querySelector('.score')
            // console.log(target_scores);
            if (Number(target_scores.textContent) > 0) {
               target_scores.textContent = Number(target_scores.textContent) - 1 
            }
            
        })
    })
}










