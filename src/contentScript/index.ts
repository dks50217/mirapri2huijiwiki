console.info('contentScript is running')

const elements = document.querySelectorAll('.eorzeadb_link');

elements.forEach((element) => {
    const text = element.textContent;
    const url = `https://ff14.huijiwiki.com/index.php?title=特殊:搜索&search=${text}&profile=default&sort=just_match`;
    const link = document.createElement('a');
    
    link.href = url;
    link.target = '_blank';
    link.textContent = "灰機連結";

    link.style.display = 'inline-block';
    link.style.padding = '6px 12px';
    link.style.margin = '5px';
    link.style.backgroundColor = '#007bff';
    link.style.color = 'white';
    link.style.textDecoration = 'none';
    link.style.borderRadius = '2px';
    link.style.fontSize = '12px';
    link.style.transition = 'background-color 0.3s ease';

    element.parentNode?.insertBefore(link, element.nextSibling);
});