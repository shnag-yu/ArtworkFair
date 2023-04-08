window.addEventListener('load', () => {
    document.getElementById('searchButton').addEventListener('click', () => {
        const searchInput = document.getElementById('searchInput').value;
        if(searchInput.trim() == ''){
            alert('请输入搜索内容');
        }
        else{
             window.location.href = './SearchPage.html';
        }       
    });
});
  