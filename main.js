const tabs = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');


const products =[];

fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
    .then(response => response.json())
    .then(data => {
        let myarr = data.categories
        products.push(myarr);
        const men = data.categories[0]
        const women = data.categories[1]
        const kid = data.categories[2]
       

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
              const targetTab = tab.dataset.tab;
              tabs.forEach(t => t.classList.remove('active'));
              tab.classList.add('active');
              tabPanes.forEach(p => p.classList.remove('active'));
              document.getElementById(targetTab).classList.add('active');
          
              
          
              // Add or remove cards based on active tab
              if (targetTab === 'tab1'  && men) {
                const cards = `
                  <div class="card">
                      <div class="image-content">
                        <img class="card-img" src="${men.category_products[0].image}"/>
                        <h3 class="text">${men.category_products[0].badge_text}</h3>
                      </div>
                     
                      <div class="heading-content">
                        <h3>${men.category_products[0].title}</h3>
                        <li>${men.category_products[0].vendor}</li>
                      </div>
                      <div class="card-content">
                        <p>RS ${men.category_products[0].price}</p>
                        <p class="p-content">RS ${men.category_products[0].compare_at_price}</p>
                        <p>50% off</p>
                      </div>
                      <button>Add to cart</button>

                  </div>
                  <div class="card">
                  <div class="image-content">
                    <img class="card-img" src="${men.category_products[1].image}"/>
                    
                  </div>

                    <div class="heading-content">
                      <h3>${men.category_products[1].title}</h3>
                      <li>${men.category_products[1].vendor}</li>
                    </div>
                    
                    <div class="card-content">
                      <p>RS ${men.category_products[1].price}</p>
                      <p class="p-content">RS ${men.category_products[1].compare_at_price}</p>
                      <p>50% off</p>
                    </div>
                    <button>Add to cart</button>
                  </div>
                  <div class="card">
                  <div class="image-content">
                    <img class="card-img" src="${men.category_products[2].image}"/>
                    <h3 class="text">${men.category_products[2].badge_text}</h3>
                  </div>

                    <div class="heading-content">
                    <h3>${men.category_products[2].title}</h3>
                    <li>${men.category_products[2].vendor}</li>
                    </div>
                    
                    <div class="card-content">
                      <p>RS ${men.category_products[2].price}</p>
                      <p class="p-content">RS ${men.category_products[2].compare_at_price}</p>
                      <p>50% off</p>
                    </div>
                    <button>Add to cart</button>
                  </div>
                  <div class="card">
                  <div class="image-content">
                    <img class="card-img" src="${men.category_products[3].image}"/>
                    <h3 class="text">${men.category_products[3].badge_text}</h3>
                  </div>

                    <div class="heading-content">
                      <h3>${men.category_products[3].title}</h3>
                      <li>${men.category_products[3].vendor}</li>
                    </div>
                    
                    <div class="card-content">
                      <p>RS ${men.category_products[3].price}</p>
                      <p class="p-content">RS ${men.category_products[3].compare_at_price}</p>
                      <p>50% off</p>
                      </div>
                    <div>
                    <button>Add to cart</button>
                  </div>
                `;
                document.getElementById('tab1').innerHTML = cards;
              } else if (targetTab === 'tab2' && women) {
                const cards = `
                  <div class="card">
                  <div class="image-content">
                    <img class="card-img" src="${women.category_products[0].image}"/>
                    <h3 class="text">${women.category_products[0].badge_text}</h3>
                  </div>
                    <div class="heading-content">
                      <h3>${women.category_products[0].title}</h3>
                      <li>${women.category_products[0].vendor}</li>
                    </div>
                    
                    <div class="card-content">
                      <p>RS ${women.category_products[0].price}</p>
                      <p class="p-content">RS ${women.category_products[0].compare_at_price}</p>
                      <p>50% off</p>
                    </div>
                    <button>Add to cart</button>
                  </div>
                  <div class="card">
                  <div class="image-content">
                  <img class="card-img" src="${women.category_products[1].image}"/>
            
                  </div>

                    <div class="heading-content">
                      <h3>${women.category_products[1].title}</h3>
                      <li>${women.category_products[1].vendor}</li>
                    </div>
                    
                    <div class="card-content">
                      <p>RS ${women.category_products[1].price}</p>
                      <p class="p-content">RS ${women.category_products[1].compare_at_price}</p>
                      <p>50% off</p>
                    </div>
                    <button>Add to cart</button>
                  </div>
                  <div class="card">
                  <div class="image-content">
                    <img class="card-img" src="${women.category_products[2].image}"/>
                    <h3 class="text">${women.category_products[2].badge_text}</h3>
                  </div>
                    <div class="heading-content">
                      <h3>${women.category_products[2].title}</h3>
                      <li>${women.category_products[2].vendor}</li>
                    </div>
                    
                    <div class="card-content">
                      <p>RS ${women.category_products[2].price}</p>
                      <p class="p-content">RS ${women.category_products[2].compare_at_price}</p>
                      <p>50% off</p>
                    </div>
                    <button>Add to cart</button>
                  </div>
                  <div class="card">
                  <div class="image-content">
                    <img class="card-img" src="${women.category_products[3].image}"/>
                    <h3 class="text">${women.category_products[3].badge_text}</h3>
                  </div>
                    <div class="heading-content">
                      <h3>${women.category_products[3].title}</h3>
                      <li>${women.category_products[3].vendor}</li>
                    </div>
                    
                    <div class="card-content">
                      <p>RS ${women.category_products[3].price}</p>
                      <p class="p-content">RS ${women.category_products[3].compare_at_price}</p>
                      <p>50% off</p>
                    </div>
                    <button>Add to cart</button>
                  </div>
                `;
                document.getElementById('tab2').innerHTML = cards;
              }else if(targetTab === "tab3" && kid){
                  const cards = `
                  <div class="card">
                  <div class="image-content">
                    <img class="card-img" src="${kid.category_products[0].image}"/>
                    <h3 class="text">${kid.category_products[0].badge_text}</h3>
                  </div>

                    <div class="heading-content">
                      <h3>${kid.category_products[0].title}</h3>
                      <li>${kid.category_products[0].vendor}</li>
                    </div>
                    
                    <div class="card-content">
                      <p>RS ${kid.category_products[0].price}</p>
                      <p class="p-content">RS ${kid.category_products[0].compare_at_price}</p>
                      <p>50% off</p>
                    </div>
                    <button>Add to cart</button>
                  </div>
                  <div class="card">
                  <div class="image-content">
                    <img class="card-img" src="${kid.category_products[1].image}"/>
                    <h3 class="text">${kid.category_products[1].badge_text}</h3>
                  </div>

                    <div class="heading-content">
                      <h3>${kid.category_products[1].title}</h3>
                      <li>${kid.category_products[1].vendor}</li>
                    </div>
                    
                    <div class="card-content">
                      <p>RS ${kid.category_products[1].price}</p>
                      <p class="p-content">RS ${kid.category_products[1].compare_at_price}</p>
                      <p>50% off</p>
                    </div>
                    <button>Add to cart</button>
                  </div>
                  <div class="card">
                  <div class="image-content">
                    <img class="card-img" src="${kid.category_products[2].image}"/>
                    <h3 class="text">${kid.category_products[2].badge_text}</h3>
                  </div>

                    <div class="heading-content">
                      <h3>${kid.category_products[2].title}</h3>
                      <li>${kid.category_products[2].vendor}</li>
                    </div>
                   
                    <div class="card-content">
                      <p>RS ${kid.category_products[2].price}</p>
                      <p class="p-content">RS ${kid.category_products[2].compare_at_price}</p>
                      <p>50% off</p>
                    </div>
                    <button>Add to cart</button>
                  </div>
                  <div class="card">
                  <div class="image-content">
                    <img class="card-img" src="${kid.category_products[3].image}"/>
                    <h3 class="text">${kid.category_products[3].badge_text}</h3>
                  </div>

                    <div class="heading-content">
                      <h3>${kid.category_products[3].title}</h3>
                      <li>${kid.category_products[3].vendor}</li>
                    </div>
                    
                    <div class="card-content">
                      <p>RS ${kid.category_products[3].price}</p>
                      <p class="p-content">RS ${kid.category_products[3].compare_at_price}</p>
                      <p>50% off</p>
                    </div>
                    <button>Add to cart</button>
                  </div>
                `;
                document.getElementById('tab3').innerHTML = cards;
              }
            });
          })
        
    });
    console.log(products)





// tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     const targetTab = tab.dataset.tab;
//     tabs.forEach(t => t.classList.remove('active'));
//     tab.classList.add('active');
//     tabPanes.forEach(p => p.classList.remove('active'));
//     document.getElementById(targetTab).classList.add('active');

    

//     // Add or remove cards based on active tab
//     if (targetTab === 'tab1') {
//       const cards = `
//         <div class="card">
//             <img src=${products.categories[0].category_products}/>
//         </div>
//         <div class="card">Card 2 for Tab 1</div>
//         <div class="card">Card 3 for Tab 1</div>
//         <div class="card">Card 4 for Tab 1</div>
//       `;
//       document.getElementById('tab1').innerHTML = cards;
//     } else if (targetTab === 'tab2') {
//       const cards = `
//         <div class="card">Card 1 for Tab 2</div>
//         <div class="card">Card 2 for Tab 2</div>
//         <div class="card">Card 3 for Tab 2</div>
//         <div class="card">Card 4 for Tab 2</div>
//       `;
//       document.getElementById('tab2').innerHTML = cards;
//     }else if(targetTab === "tab3"){
//         const cards = `
//         <div class="card">Card 1 for Tab 3</div>
//         <div class="card">Card 2 for Tab 3</div>
//         <div class="card">Card 3 for Tab 3</div>
//         <div class="card">Card 4 for Tab 3</div>
//       `;
//       document.getElementById('tab3').innerHTML = cards;
//     }
//   });
// })