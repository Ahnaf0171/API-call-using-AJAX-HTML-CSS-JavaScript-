// Modal functions
function openModal(postId) {
    const modal = document.getElementById('postModal');
    if (modal) {
        document.body.classList.add('modal-open');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        url4 = `https://basic-blog.teamrabbil.com/api/post-details/${postId}`
        fetch(url4)
        .then((response) => response.json())
        .then((data) => {
            
                document.getElementById('image_id').setAttribute("src", data.postDetails.img);
                document.getElementById('detail_content').innerHTML = data.postDetails.content;
                const comment_list = document.getElementById('comment_id')
                comment_list.innerHTML = "";
                data.postComments.forEach((el) => {
                    comment_list.innerHTML +=`<div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div class="flex items-center gap-3 mb-3">
                                <div
                                    class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">
                                    ${el.author[0]}
                                </div>
                                <div>
                                    <div class="font-semibold text-gray-800">${el.author}</div>
                                    <div class="text-sm text-gray-500">December 15, 2024</div>
                                </div>
                            </div>
                            <p class="text-gray-600 leading-relaxed">${el.comment}</p>
                        </div>`

                })
            }
        )
        

    }
}

function closeModal() {
    const modal = document.getElementById('postModal');
    if (modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }
}

// Close modal when clicking outside
document.getElementById('postModal')?.addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

//Add category Buttons 
let add_button = document.getElementById("category_buttons")

//add one button  
/*add_button.innerHTML+=`<button
class="px-4 py-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-200 transition-all text-sm sm:text-base whitespace-nowrap">
HTML
</button>`*/

// butttons_name= ["HTML", "CSS", "JavaScript(AJAX, DOM)", "BootStrap", "REACT", "MY SQL", "Django", "Git And Github", "Docker"]

//add some buttons at  a time 

/*butttons_name.forEach(button_name => {
    add_button.innerHTML +=`<button
                        class="px-4 py-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white 
                        hover:shadow-lg hover:shadow-purple-200 transition-all text-sm sm:text-base whitespace-nowrap">
${button_name}
</button>`
    
}); */
const URL1 = "https://basic-blog.teamrabbil.com/api/post-categories"

axios(URL1)

.then((data) => {
    console.log(data)
    data.data.forEach(b_name => {
        add_button.innerHTML +=`<button onclick="click_button('${b_name.id}')"
            class="px-4 py-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white 
            hover:shadow-lg hover:shadow-purple-200 transition-all text-sm sm:text-base whitespace-nowrap">
        ${b_name.name}
        </button>`
        })
})
.catch((error) => {console.log("Error")})

const add_post = document.getElementById("post_id")
const url2="https://basic-blog.teamrabbil.com/api/post-newest"
fetch(url2)
.then((response) => response.json())
.then((data) => {
    add_post.innerHTML = "";
    data.forEach((element) =>{
        add_post.innerHTML += `<article
                        class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden group">
                        <div class="relative overflow-hidden">
                            <img src=" ${element.img}" alt="Post Title"
                                class="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300">
                            <div class="absolute top-4 left-4">
                                <span
                                    class="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-purple-600 text-sm font-semibold">
                                    Technology
                                </span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3
                                class="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                                ${element.title}
                            </h3>
                            <p class="text-gray-600 mb-4 line-clamp-2">
                                ${element.short}
                            </p>
                            <div class="flex items-center justify-between">
                                <span class="text-sm text-gray-500">Dec 15, 2024</span>
                                <button onclick="openModal('${element.id}')"
                                    class="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-2 transition-colors">
                                    Read more →
                                </button>
                            </div>
                        </div>
                    </article>
                    `
        

    })
})
 function click_button(id){
    console.log(id)
    
    const add_post = document.getElementById("post_id")
    const url3=`https://basic-blog.teamrabbil.com/api/post-list/${id}`
    fetch(url3)
    .then((response) => response.json())
    .then((data) => {
        add_post.innerHTML = "";
        data.forEach((element) =>{
            add_post.innerHTML += `<article
                            class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden group">
                            <div class="relative overflow-hidden">
                                <img src=" ${element.img}" alt="Post Title"
                                    class="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300">
                                <div class="absolute top-4 left-4">
                                    <span
                                        class="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-purple-600 text-sm font-semibold">
                                        Technology
                                    </span>
                                </div>
                            </div>
                            <div class="p-6">
                                <h3
                                    class="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                                    ${element.title}
                                </h3>
                                <p class="text-gray-600 mb-4 line-clamp-2">
                                    ${element.short}
                                </p>
                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-gray-500">Dec 15, 2024</span>
                                    <button onclick="openModal('${element.id}')"
                                        class="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-2 transition-colors">
                                        Read more →
                                    </button>
                                </div>
                            </div>
                        </article>
                        `
            

        })
    })
}

/*
    

async function click_comment() {
    const name_of_a_commenter = document.getElementById('authorName').value;
    const comment_of_a_commenter = document.getElementById('commentText').value;

    const commenter = {
        "author": name_of_a_commenter,  // Corrected key names
        "comment": comment_of_a_commenter
    };

    const url5 = "https://basic-blog.teamrabbil.com/api/create-comment"

        response = axios.post(url5, commenter); 
         
}
        */
