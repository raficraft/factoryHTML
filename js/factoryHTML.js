
function htmlFactory() {

    this.createHtmlEl = function(data,method){

        let makeData
        

        switch(method){

            // Method pour obtenir le code HTML generer dans une chaine de caratère
            // Insert with innerHtml or insertAdjacentHTML('afterbegin', 'html générer');

            case 'elHtml' :
                
                makeData = workShopHtmlElements(data)

            break;

            //Method pour obtenir le code HTML générer dans un object
            // Insert with appendChild ou autre injecteur d'objet 

            case 'elHtmlObject' :
                
                makeData = new workShopHtmlObject(data)

            break;           

        }

        return makeData
      
    }
}




// Renvoie une chaine de caratère

function workShopHtmlElements(thisObject){

    this.elHtml = ``


        let sizeOfobject = Object.size(thisObject)

        for(let i = 0; i< sizeOfobject; i++){

            //console.log(i);

            if(thisObject[i]['html']){

            
                if(thisObject[i]['html']['tag']){

                    let tag = thisObject[i]['html']['tag']

                   // console.log(thisObject[i]['html']['tag']);

                    this.elHtml += `<${tag} `

                    for (const k1 in thisObject[i]['attr']) {

                        let v = `${thisObject[i]['attr'][k1]}` 
                        
                        //Gestion des attributs ainsi que de l'attribut vide "checked"

                        if(k1 !== 'checked' || k1 !== 'required' || k1 !== 'controls' || k1 !== 'disabled' || k1!== open || k1 !== 'readOnly'){
                            this.elHtml += `${k1}="${v}" `
                        }else{
                            this.elHtml += `${v}`
                        }
                    }  

                    this.elHtml += `>`    
                    
                        if(thisObject[i]['textContent']){
                            let thisText = thisObject[i]['textContent']['text']
                            this.elHtml += thisText
                        }

                
                        //On boucle sur le child
                        //Qui peut contenir un nombre indéfinis 
                        //De contenu supplémentaires
                
                        if(thisObject[i]['child']){
                        
                            this.elHtml += workShopHtmlElements(thisObject[i]['child'])
                        
                        }
                    

                    if(
                        tag !== 'area' || tag !== 'base' || tag !== 'br' || tag !== 'col' || tag !== 'embed' || tag !== 'hr'  
                        || tag !== 'img' || tag !== 'input' || tag !== 'link' || tag !== 'meta' 
                        || tag !== 'param' || tag !== 'source' || tag !== 'track' || tag !== 'wbr'
                    ){
                
                        this.elHtml +=`</${tag}>`
                    }
                }

            }

        }

    return this.elHtml


}



function workShopHtmlObject(thisObject) {

   this.elHtml


    let sizeOfobject = Object.size(thisObject)

    for(let i = 0; i< sizeOfobject; i++){


        if(thisObject[i]['html']){            
            
            if(thisObject[i]['html']['tag']){
               

                let tag = thisObject[i]['html']['tag']
               
                this.elHtml =  document.createElement(`${tag}`);


                for (const k1 in thisObject[i]['attr']) {

                    let v = `${thisObject[i]['attr'][k1]}` 
                    
                    //Gestion des attributs ainsi que de l'attribut vide "checked"

                    if(k1 !== 'checked' || k1 !== 'required' || k1 !== 'controls' || k1 !== 'disabled' || k1!== open || k1 !== 'readOnly'){
                        this.elHtml.setAttribute(`${k1}`,`${v}`) 
                    }else{
                        this.elHtml.setAttribute(`${v}`)
                    }
                }
                
                if(thisObject[i]['textContent']){
                    let thisText = thisObject[i]['textContent']['text']
                    this.elHtml.textContent(`${thisText}`)
                }

                if(thisObject[i]['child']){                  
                        
                    this.elHtml.insertAdjacentHTML('afterbegin',workShopHtmlElements(thisObject[i]['child']))
                
                }                

            }
        }

    }

    return this.elHtml

}




/*
Il n'est pas possible de mesurer la longueur d'un objet
On surcharge donc l'objet Object avec la méthod size.

Obtiens la dimension d'un objet
*/
Object.size = function(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};




//On instancie l'usine
let factoryHtml = new htmlFactory


// On envoie à l'atelier qui nous retourne une chaine de caractère
let thisHtml = factoryHtml.createHtmlEl(myHtml,'elHtml')
// Pour plus de simplicité on utilise la methode insertAdjacentHTML
// Qui nous permet d'inserer l'élément plus précisement ou l'on veux.
// @param de insertAdjacentHTML
//  'beforebegin' : Avant l'element  lui-même.
//  'afterbegin' : Juste à l'intérieur de l'element , avant son premier enfant.
//  'beforeend' : Juste à l'intérieur de l'element , après son dernier enfant.
//  'afterend' : Après element lui-même.
document.querySelector("#insertHtmlString__wrapper").insertAdjacentHTML('afterbegin', thisHtml);
console.log(thisHtml);
console.info(typeof thisHtml);
console.info('log');


// On envoie à l'atelier qui nous retourne un objet
let thisHtmlObject = factoryHtml.createHtmlEl(myHtml,'elHtmlObject')
//Injection avec appendChild, l'objet ne peut être insérer avec insertAdjacentHTML
document.querySelector("#insertHtmlObject__wrapper").appendChild(thisHtmlObject,body);
console.log(thisHtmlObject);
console.log(typeof thisHtmlObject);

















