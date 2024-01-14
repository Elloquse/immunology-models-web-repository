const ulTag = document.querySelector(".pagination");
const totalPages = pageNumber();
const page = 1;

const first_arrow = ulTag.firstElementChild.innerHTML;
const last_arrow = ulTag.lastElementChild.innerHTML;

function element(totalPages, page){

    let liTag = first_arrow;
    let activeLi = "active";

    if (totalPages <= 4) {
        for (var i = 1; i <= totalPages; i++) {
            if (i == page) {
                liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, ${i}); visiblePageNumber()"><button>${i}</button></li>`;
            } else {
                liTag += `<li class="page_item" onclick="element(${totalPages}, ${i}); pageChange(${i}); visiblePageNumber()"><button>${i}</button></li>`;
            }
        }
    } else if (totalPages >= 9) {
        if (page < 5) {
            if (page == 1) {
                liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, ${page}); pageChange( ${page}); visiblePageNumber()"><button>${page}</button></li>`;
                liTag += `<li class="page_item" onclick="element(${totalPages}, ${page + 1}); pageChange(${page + 1}); visiblePageNumber()"><button>${page + 1}</button></li>`;
                liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;

                liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(${totalPages - 1}); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
                liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange(${totalPages}); visiblePageNumber()"><button>${totalPages}</button></li>`;
            } else {
                for (var i = 1; i < page; i++) {
                    liTag += `<li class="page_item" onclick="element(${totalPages}, ${i}); pageChange(${i}); visiblePageNumber()"><button>${i}</button></li>`;
                }
                liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, ${page}); pageChange(${page}); visiblePageNumber()"><button>${page}</button></li>`;
                liTag += `<li class="page_item" onclick="element(${totalPages}, ${page + 1}); pageChange(${page + 1}); visiblePageNumber()"><button>${page + 1}</button></li>`;
                liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;

                liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange( ${totalPages - 1}); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
                liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange( ${totalPages}); visiblePageNumber()"><button>${totalPages}</button></li>`;
            }
        } else if (page >= totalPages - 3) {
            liTag += `<li class="page_item" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;
            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;
            for (var i = page - 1; i != totalPages + 1; i++) {
                if (i == page) {
                    liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, ${i}); pageChange(${i}); visiblePageNumber()"><button>${i}</button></li>`;
                } else {
                    liTag += `<li class="page_item" onclick="element(${totalPages}, ${i}); pageChange(${i}); visiblePageNumber()"><button>${i}</button></li>`;
                }
            }   
        } else {
            liTag += `<li class="page_item" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;
            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;

            for (var i = page - 1; i != page + 2; i++ ){
                if (i == page) {
                    liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, ${i}); pageChange(${i}); visiblePageNumber()"><button>${i}</button></li>`;
                } else {
                    liTag += `<li class="page_item" onclick="element(${totalPages}, ${i}); pageChange(${i}); visiblePageNumber()"><button>${i}</button></li>`;
                }
            }
            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(${totalPages - 1}); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange(${totalPages}); visiblePageNumber()"><button>${totalPages}</button></li>`;
        }
    } else if (totalPages == 5) {
        if (page == 1) {
            liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;

            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(4); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange(5); visiblePageNumber()"><button>${totalPages}</button></li>`;
        } else if (page == totalPages) {
            liTag += `<li class="page_item" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;

            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(4); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, ${totalPages}); pageChange(5); visiblePageNumber()"><button>${totalPages}</button></li>`; 
        } else {
            for (var i = 1; i != totalPages + 1; i++) {
                if (i == page) {
                    liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, ${i}); pageChange(${i}); visiblePageNumber()"><button>${i}</button></li>`;
                } else {
                    liTag += `<li class="page_item" onclick="element(${totalPages}, ${i}); pageChange(${i}); visiblePageNumber()"><button>${i}</button></li>`;
                }
            }
        }
    } else if (totalPages == 6) {
        if (page == 1) {
            liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;

            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(5); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange(6); visiblePageNumber()"><button>${totalPages}</button></li>`;
        } else if (page == totalPages) {
            liTag += `<li class="page_item" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;

            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(5); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, ${totalPages}); pageChange(6); visiblePageNumber()"><button>${totalPages}</button></li>`; 
        } else if (page == 2) {
            liTag += `<li class="page_item" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 3); pageChange(3); visiblePageNumber()"><button>3</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;

            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(5); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange(6); visiblePageNumber()"><button>${totalPages}</button></li>`;
        } else if (page == 5) {
            liTag += `<li class="page_item" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;

            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 2}); pageChange(4); visiblePageNumber()"><button>${totalPages - 2}</button></li>`;   
            liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(5); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange(6); visiblePageNumber()"><button>${totalPages}</button></li>`;
        } else {
            for (var i = 1; i != totalPages + 1; i++) {
                if (i == page) {
                    liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, ${i}); pageChange(${i}); visiblePageNumber()"><button>${i}</button></li>`;
                } else {
                    liTag += `<li class="page_item" onclick="element(${totalPages}, ${i}); pageChange(${i}); visiblePageNumber()"><button>${i}</button></li>`;
                }
            }
        }
    } else if (totalPages == 7) {
        if (page == 1) {
            liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;

            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(6); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange(7); visiblePageNumber()"><button>${totalPages}</button></li>`;
        } else if (page == totalPages) {
            liTag += `<li class="page_item" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;

            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(6); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, ${totalPages}); pageChange(7); visiblePageNumber()"><button>${totalPages}</button></li>`; 
        } else if (page == 2) {
            liTag += `<li class="page_item" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 3); pageChange(3); visiblePageNumber()"><button>3</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;

            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(6); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange(7); visiblePageNumber()"><button>${totalPages}</button></li>`;
        } else if (page == 3) {
            liTag += `<li class="page_item" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;
            liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, 3); pageChange(3); visiblePageNumber()"><button>3</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 4); pageChange(4); visiblePageNumber()"><button>4</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;

            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(6); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange(7); visiblePageNumber()"><button>${totalPages}</button></li>`;
        } else if (page == 6) {
            liTag += `<li class="page_item" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;

            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 2}); pageChange(5); visiblePageNumber()"><button>${totalPages - 2}</button></li>`;   
            liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(6); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange(7); visiblePageNumber()"><button>${totalPages}</button></li>`;
        } else if (page == 5) {
            liTag += `<li class="page_item" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;
            
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 3}); pageChange(4); visiblePageNumber()"><button>${totalPages - 3}</button></li>`;
            liTag += `<li class="page_item  ${activeLi}" onclick="element(${totalPages}, ${totalPages - 2}); pageChange(5); visiblePageNumber()"><button>${totalPages - 2}</button></li>`;   
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(6); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange(7); visiblePageNumber()"><button>${totalPages}</button></li>`;
        } else {
            for (var i = 1; i != totalPages + 1; i++) {
                if (i == page) {
                    liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, ${i}); pageChange(${i}); visiblePageNumber()"><button>${i}</button></li>`;
                } else {
                    liTag += `<li class="page_item" onclick="element(${totalPages}, ${i}); pageChange(${i}); visiblePageNumber()"><button>${i}</button></li>`;
                }
            }
        }
    } else if (totalPages == 8) {
        if (page == 1) {
            liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;

            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(7); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange(8); visiblePageNumber()"><button>${totalPages}</button></li>`;
        } else if (page == totalPages) {
            liTag += `<li class="page_item" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;

            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(7); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, ${totalPages}); pageChange(8); visiblePageNumber()"><button>${totalPages}</button></li>`; 
        } else if (page == 2) {
            liTag += `<li class="page_item" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 3); pageChange(3); visiblePageNumber()"><button>3</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;

            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(7); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange(8); visiblePageNumber()"><button>${totalPages}</button></li>`;
        } else if (page == 3) {
            liTag += `<li class="page_item" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;
            liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, 3); pageChange(3); visiblePageNumber()"><button>3</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 4); pageChange(4); visiblePageNumber()"><button>4</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;

            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(7); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange(8); visiblePageNumber()"><button>${totalPages}</button></li>`;
        } else if (page == 5) {
            liTag += `<li class="page_item" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 4); pageChange(4); visiblePageNumber()"><button>4</button></li>`;

            liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, ${page}); pageChange(5); visiblePageNumber()"><button>${page}</button></li>`;
            
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 2}); pageChange(6); visiblePageNumber()"><button>${totalPages - 2}</button></li>`;   
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(7); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange(8); visiblePageNumber()"><button>${totalPages}</button></li>`;

        } else if (page == 4) {
            liTag += `<li class="page_item" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 3); pageChange(3); visiblePageNumber()"><button>3</button></li>`;
            liTag += `<li class="page_item  ${activeLi}" onclick="element(${totalPages}, 4); pageChange(4); visiblePageNumber()"><button>4</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 5); pageChange(5); visiblePageNumber()"><button>5</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;
  
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(7); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange(8); visiblePageNumber()"><button>${totalPages}</button></li>`;
        } else if (page == 6) {
            liTag += `<li class="page_item" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;
  
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${page - 1}); pageChange(5); visiblePageNumber()"><button>${page - 1}</button></li>`;
            liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, ${page}); pageChange(6); visiblePageNumber()"><button>${page}</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages - 1}); pageChange(7); visiblePageNumber()"><button>${totalPages - 1}</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange(8); visiblePageNumber()"><button>${totalPages}</button></li>`;
        } else if (page == 7) {
            liTag += `<li class="page_item" onclick="element(${totalPages}, 1); pageChange(1); visiblePageNumber()"><button>1</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, 2); pageChange(2); visiblePageNumber()"><button>2</button></li>`;

            liTag += `<li class="page_item_dots"><button id="dots">...</button></li>`;
  
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${page - 1}); pageChange(6); visiblePageNumber()"><button>${page - 1}</button></li>`;
            liTag += `<li class="page_item ${activeLi}" onclick="element(${totalPages}, ${page}); pageChange(7); visiblePageNumber()"><button>${page}</button></li>`;
            liTag += `<li class="page_item" onclick="element(${totalPages}, ${totalPages}); pageChange(8); visiblePageNumber()"><button>${totalPages}</button></li>`;
        }
    }
    

    liTag += last_arrow;
    ulTag.innerHTML = liTag;

    if (page == totalPages && page == 1) {

        document.querySelector("#next_arrow").style.cursor = "default";   
        document.querySelector("#next_arrow").style.color = "#0000003d";

        document.querySelector("#prev_arrow").style.cursor = "default";   
        document.querySelector("#prev_arrow").style.color = "#0000003d";

    } else if (totalPages > 1) {
        if (page == 1) {

            document.querySelector("#prev_arrow").style.cursor = "default";   
            document.querySelector("#prev_arrow").style.color = "#0000003d";
    
            document.querySelector("#next_arrow").style.cursor = "pointer";   
            document.querySelector("#next_arrow").style.color = "black";
    
            document.querySelector("#next_arrow").setAttribute("onclick",`element(${totalPages}, ${page + 1}); pageChange(${page + 1}); visiblePageNumber(); `);
    
        } else if (page == totalPages) {
    
            document.querySelector("#prev_arrow").style.cursor = "pointer";   
            document.querySelector("#prev_arrow").style.color = "black";
    
            document.querySelector("#next_arrow").style.cursor = "default";   
            document.querySelector("#next_arrow").style.color = "#0000003d";
    
            document.querySelector("#prev_arrow").setAttribute("onclick",`element(${totalPages}, ${page - 1}); pageChange(${page - 1}); visiblePageNumber(); `);

        } else {
    
            document.querySelector("#prev_arrow").style.cursor = "pointer";   
            document.querySelector("#prev_arrow").style.color = "black";
    
            document.querySelector("#next_arrow").style.cursor = "pointer";   
            document.querySelector("#next_arrow").style.color = "black";
    
            document.querySelector("#prev_arrow").setAttribute("onclick",`element(${totalPages}, ${page - 1}); pageChange(${page - 1}); visiblePageNumber(); `);
            document.querySelector("#next_arrow").setAttribute("onclick",`element(${totalPages}, ${page + 1}); pageChange(${page + 1}); visiblePageNumber(); `);
        }
    }
    
}

element(totalPages, page);
