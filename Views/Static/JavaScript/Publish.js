document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('imageInput').addEventListener('change', function (event) {
        const imagePreview = document.getElementById('imagePreview');
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
            };
            reader.readAsDataURL(event.target.files[0]);
        } else {
            imagePreview.style.display = 'none';
        }
    });
});
         


document.getElementById('publishForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    // 在此处处理发布操作，例如将数据发送到服务器
    // 以下为示例代码，实际操作根据您的需求和后端接口进行调整
    /*
    fetch('/api/artwork', {
        method: 'POST',
        body: formData,
    })
    .then((response) => response.json())
    .then((result) => {
        console.log('发布成功:', result);
    })
    .catch((error) => {
        console.error('发布失败:', error);
    });
    */

    console.log('表单数据：', Object.fromEntries(formData.entries()));
    alert('发布成功！');
});
