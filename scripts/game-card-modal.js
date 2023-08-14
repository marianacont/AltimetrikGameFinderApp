import { gallery } from "./create-search-list.js";
import { apiKey } from "./games-fetch.js";



export const createModalCard = (games, cards) => {
    
    games.forEach(game => {
        const fetchVideo =  (game) => {
            
             fetch(`https://rawg.io/api/games/${game.id}/movies?key=${apiKey}`)
                    .then(response => response.json())
                    .then(data => getVideo(data.results))
                    .catch(error => console.error(error))
            };
        fetchVideo(game);
        const getVideo = (videos) => {
            videos.map(video => {
                let trailer = video.data[480]
                game.video = trailer
                
            })
        }
        })

    cards.forEach(card => {
        card.addEventListener('click', () => {
            games.forEach(game => {
                const gameId = game.id;
                
                if(gameId == card.id){
                    let modalExist = document.getElementById(`${game.slug}`);
                if(modalExist){
                    modalExist.classList.add('active')
                }else {
                    let platform_list = game.platforms.map(platform => platform.platform.name).join(', ');
                    let publishers = game.publishers.map(publisher => publisher.name).join(', ');
                    let developer = game.developers.map(developer => developer.name).join(', ');
                    let getFourImages = (images) => {
                        const firstFour = images.slice(0, 4);
                        let firstFourHtml = firstFour.map(image => `<img src="${image.image}" alt=""></img>`).join(' ')
                        return firstFourHtml
                    }
                    let imagesHtml = getFourImages(game.images)

                    let modalCard = `
                    <div class="modal card_modal active" id="${game.slug}">
                    <div class="modal_container">
                        <div class="card_modal_image" style="background-image: url(${game.background})">
                            <svg 
                                id="card_close"
                                class="card_close" 
                                width="24" height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#fff">
                                <path fill-rule="evenodd" clip-rule="evenodd" 
                                d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z" /></svg>
                                <div></div>
                            <div class="gradient_layer"></div>
                        </div>
            
                        <div class="card_modal_content">
                            
                            <div class="card_header">
                                <div class="card_modal_icons flex">
                                    ${game.platforms_icons}
                                </div>
                                <h2 class="card_title">${game.title}</h2>
                                <div class="card_highlights">
                                    <p>${game.released}</p>
                                    <p><span>${game.number}</span> TOP 2023</p>
                                    <p><span>#5</span> ACTION</p>
                                </div>
                            </div>
            
                            <div class="card_modal_description">
                                <p>${game.description}</p>
                            </div>
                            
            
                            <div class="card_modal_btns">
                                <button class="btn">Add to wishlist</button>
                                <button class="btn btn-light">Purchase</button>
                            </div>
            
                            <div class="card_modal_info">
                                <ul>
                                    <li>Platforms
                                        <br><span>${platform_list}</span>
                                    </li>
                                    <li>Release date: 
                                        <br><span>${game.released}</span>
                                    </li>
                                    <li>Publisher
                                        <br><span class="publisher">${publishers}</span>
                                    </li>
                                    <li>Website
                                        <br><span> <a href="${game.website}" target="_blank">${game.website}</a></span>
                                    </li>
                                    <li>Genres: 
                                        <br><span class="genre">${game.genres}</span>
                                    </li>
                                    <li>Developer
                                        <br><span class="developer">${developer}</span>
                                    </li>
                                    <li>Age rating
                                        <br><span class="age">${game.esrb.name}</span>
                                    </li>
                                </ul>   
            
                            </div>
            
                            <div class="card_actions">
                                <svg width="24" height="24" fill="#BF5FE1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.8 18.37l.001.003c.33.43.488 1.859-1.775 1.605a10.718 10.718 0 0 1-2.717-.63 10.337 10.337 0 0 1-1.95-.996 8.959 8.959 0 0 1-2.848.634A7.489 7.489 0 0 1 8.5 22a7.495 7.495 0 0 1-2.32-.366c-.44.255-.94.504-1.492.713-1.12.424-2.049.583-2.717.63-.5.037-.853.011-1.027-.009-.382-.044-.724-.262-.872-.628a1 1 0 0 1 .124-.967c.252-.345.484-.706.704-1.072.428-.714.848-1.484.954-2.322a7.5 7.5 0 0 1 3.437-10.26 9 9 0 1 1 16.848 6.126c-.19 1.724.677 3.175 1.66 4.525zM7 10a7 7 0 1 1 13.272 3.112 1 1 0 0 0-.095.307c-.219 1.575.15 3.011.905 4.39a8.597 8.597 0 0 1-3.03-1.405 1 1 0 0 0-1.02-.092A7 7 0 0 1 7 10zm-1.996.254a9.004 9.004 0 0 0 6.963 8.516A5.477 5.477 0 0 1 8.5 20c-.73 0-1.423-.141-2.057-.397a1 1 0 0 0-.916.086c-.439.283-.96.565-1.548.788a8.87 8.87 0 0 1-1.065.331c.333-.607.67-1.33.824-2.01.077-.337.12-.664.138-.971a1 1 0 0 0-.134-.565A5.47 5.47 0 0 1 3 14.5c0-1.71.78-3.237 2.004-4.246z" fill="#BF5FE1"/></svg>
                    
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.973 2.944C6.773 3.957 6.437 5.477 5.207 6.707C5.095 6.819 4.972 6.937 4.842 7.063C3.7 8.164 2 9.804 2 12.5C2 13.963 2.63 15.35 3.601 16.375C4.578 17.406 5.829 18 7 18H12C12.352 18 12.646 17.91 12.82 17.793C12.965 17.697 13 17.613 13 17.5C13 17.388 12.965 17.303 12.82 17.207C12.646 17.091 12.352 17 12 17H11C10.7348 17 10.4804 16.8946 10.2929 16.7071C10.1054 16.5196 10 16.2652 10 16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H12.5C12.852 15 13.146 14.91 13.32 14.793C13.465 14.697 13.5 14.613 13.5 14.5C13.5 14.388 13.465 14.303 13.32 14.207C13.146 14.091 12.852 14 12.5 14H11.5C11.2348 14 10.9804 13.8946 10.7929 13.7071C10.6054 13.5196 10.5 13.2652 10.5 13C10.5 12.7348 10.6054 12.4804 10.7929 12.2929C10.9804 12.1054 11.2348 12 11.5 12H13C13.352 12 13.646 11.91 13.82 11.793C13.965 11.697 14 11.613 14 11.5C14 11.388 13.965 11.303 13.82 11.207C13.646 11.091 13.352 11 13 11H12C11.7348 11 11.4804 10.8946 11.2929 10.7071C11.1054 10.5196 11 10.2652 11 10C11 9.73478 11.1054 9.48043 11.2929 9.29289C11.4804 9.10536 11.7348 9 12 9H13C13.352 9 13.646 8.91 13.82 8.793C13.965 8.697 14 8.613 14 8.5C14 8.388 13.965 8.303 13.82 8.207C13.646 8.091 13.352 8 13 8H8.5C8.34101 8.00004 8.1843 7.96217 8.04288 7.88954C7.90145 7.8169 7.77938 7.71159 7.6868 7.58234C7.59421 7.45309 7.53378 7.30363 7.51051 7.14636C7.48724 6.98908 7.50181 6.82852 7.553 6.678V6.677L7.557 6.667L7.57 6.627L7.623 6.457C7.667 6.307 7.728 6.09 7.791 5.829C7.94306 5.21731 8.03615 4.59245 8.069 3.963C8.095 3.278 8.004 2.753 7.821 2.433C7.713 2.243 7.55 2.072 7.171 2.018C7.123 2.182 7.079 2.406 7.015 2.734L6.973 2.944ZM9.803 6C9.925 5.442 10.041 4.747 10.068 4.037C10.098 3.222 10.018 2.247 9.558 1.442C9.048 0.546 8.146 0 6.9 0C6.518 0 6.16 0.126 5.87 0.38C5.607 0.61 5.457 0.896 5.364 1.126C5.216 1.493 5.124 1.969 5.047 2.371L5.011 2.556C4.817 3.543 4.563 4.523 3.793 5.293C3.705 5.381 3.598 5.483 3.476 5.598C2.353 6.662 0 8.893 0 12.5C0 14.537 0.87 16.4 2.149 17.75C3.422 19.094 5.171 20 7 20H12C12.648 20 13.354 19.84 13.93 19.457C14.535 19.053 15 18.387 15 17.5C15 17.031 14.87 16.625 14.66 16.285C15.149 15.875 15.5 15.272 15.5 14.5C15.5 14.031 15.37 13.624 15.16 13.286C15.649 12.876 16 12.272 16 11.5C16 10.891 15.782 10.387 15.449 10C15.781 9.613 16 9.109 16 8.5C16 7.612 15.535 6.947 14.93 6.543C14.354 6.159 13.648 6 13 6H9.803Z" fill="#BF5FE1"/>
                                    </svg>
                    
                                    <svg width="24" height="24" fill="#BF5FE1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 5.414V15a1 1 0 1 1-2 0V5.414L8.707 7.707a1 1 0 0 1-1.414-1.414l4-4zM5 13a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2H8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-1a1 1 0 1 1 0-2h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6z" fill="#BF5FE1"/></svg>                        
                            </div>
            
                            <div class="card_video">
                                <video class="game_video" src="${game.video}" controls poster="">Your browser doesn't support this element<code>video</code></video>
                            </div>
                            <div class="card_imgs">
                                ${imagesHtml}
                                
                            </div>
            
                        </div>
                    </div>
                    </div>`

                    gallery.insertAdjacentHTML('beforeend', modalCard);
                }
                    const closeBtn = document.querySelector(`#${game.slug} .card_close`)
                    const openCard = document.querySelector(`#${game.slug}`)
                    closeBtn.addEventListener('click', () => {
                        openCard.classList.remove('active');
                    })
                }
                
            })
        
        })
    })
    
    
};
