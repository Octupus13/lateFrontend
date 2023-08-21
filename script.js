// script.js
const bucketUrl = 'https://nkm-0113.s3.amazonaws.com/'

fetchFilePath().then((filesPath)=>{
  const cardData = filesPath.map(filePath =>{
    return  { imageUrl: bucketUrl+filePath.URL, title: filePath.TITLE, content: filePath.CONTENT }
})
  
  const cardContainer = document.getElementById("cardContainer");
  
  for (const cardInfo of cardData) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
  
    const imageElement = document.createElement("img");
    imageElement.src = cardInfo.imageUrl;
    imageElement.alt = cardInfo.title;
  
    const titleElement = document.createElement("h2");
    titleElement.textContent = cardInfo.title;
  
    const contentElement = document.createElement("p");
    contentElement.textContent = cardInfo.content;
  
    cardElement.appendChild(imageElement);
    cardElement.appendChild(titleElement);
    cardElement.appendChild(contentElement);
  
    cardContainer.appendChild(cardElement);
  }
});




  async function fetchFilePath(){
    try{

        const response = await fetch('http://3.217.73.255:3001')
        
        if(!response.ok){
            throw new Error("fetxh บ่ได่")
        }
        
        const filesPath = await response.json();
        return filesPath
    }catch(err){
        console.error("Error :", err)
        return [];
    }
  }
  