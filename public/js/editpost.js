const updateFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#new-post-title').value.trim();
    const content = document.querySelector('#new-post-desc').value.trim();
  
    const url = window.location.href;
    const post_id = url.substring(url.lastIndexOf('/') + 1);
    
    if (title && content) {
      const response = await fetch(`/api/editposts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }
};

const cancelButtonHandler = (event) => {
  console.log("cancel button clicked");
   event.preventDefault();
  document.location.replace('/dashboard');
};

document
  .querySelector('.update-post-form')
  .addEventListener('submit', updateFormHandler);

document
.querySelector('#cancelBtn')
.addEventListener('click', cancelButtonHandler);
  