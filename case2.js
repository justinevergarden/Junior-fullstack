const comments = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    { commentId: 111, commentContent: 'Haai juga hai jugaa' },
                    { commentId: 112, commentContent: 'Haai juga hai jugaa' }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    { commentId: 121, commentContent: 'Haai juga hai jugaa' }
                ]
            }
        ]
    },
    { commentId: 2, commentContent: 'Halooo' }
];

function countComments(comments) {
    let count = 0;
    function recursiveCount(comments) {
        comments.forEach(comment => {
            count++;
            if (comment.replies) {
                recursiveCount(comment.replies);
            }
        });
    }
    recursiveCount(comments);
    return count;
}

console.log("Total komentar:", countComments(comments));
