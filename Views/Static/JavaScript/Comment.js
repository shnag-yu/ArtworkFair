document.getElementById('submitComment').addEventListener('click', () => {
    const commentText = document.getElementById('commentText').value;
    if (commentText.trim() !== '') {
        addComment(commentText);
        document.getElementById('commentText').value = '';
    }
});

function addComment(text, parentCommentId) {
    const commentsContainer = document.getElementById('commentsContainer');
    const newComment = document.createElement('div');
    newComment.classList.add('comment');

    const commentAuthor = document.createElement('span');
    commentAuthor.classList.add('comment-author');
    commentAuthor.textContent = '用户：';

    const commentText = document.createElement('p');
    commentText.classList.add('comment-text');
    commentText.textContent = text;

    const commentActions = document.createElement('div');
    commentActions.classList.add('comment-actions');

    const replyBtn = document.createElement('button');
    replyBtn.textContent = '回复';
    replyBtn.addEventListener('click', () => {
        const replyText = prompt('请输入回复内容：');
        if (replyText && replyText.trim() !== '') {
            addComment(replyText, newComment.id);
        }
    });

    const likeBtn = document.createElement('button');
    likeBtn.textContent = '点赞';
    likeBtn.addEventListener('click', () => {
        if (likeBtn.textContent === '点赞') {
            likeBtn.textContent = '取消点赞';
        } else {
            likeBtn.textContent = '点赞';
        }
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '删除';
    deleteBtn.addEventListener('click', () => {
        commentText.textContent = '此评论已删除';
        commentText.classList.add('deleted-comment');
        commentActions.remove();
    });
    
    commentActions.appendChild(replyBtn);
    commentActions.appendChild(likeBtn);
    commentActions.appendChild(deleteBtn);
    
    newComment.appendChild(commentAuthor);
    newComment.appendChild(commentText);
    newComment.appendChild(commentActions);
    
    newComment.id = 'comment-' + Date.now();
    
    if (parentCommentId) {
        const parentComment = document.getElementById(parentCommentId);
        parentComment.appendChild(newComment);
    } else {
        commentsContainer.appendChild(newComment);
    }
}    