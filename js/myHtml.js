// Tableau associatif de la structure HTML à injecter
// NB : Essayer à terme de faire sauter les clefs numériques 


let myHtml = 
   {
       [0]:{
        ['html']:{'tag':'div'} , 
        ['attr']:{'class':'dialogBox', "open":"open"} ,         
            ['child']:{
                 [0]:{
                    ['html']:{'tag':'button'} , 
                    ['attr']:{'class':'dialogBox__close',} , 
                    ['textContent']:{'text': 'X'} , 
                },               
                [1]:{
                    ['html']:{'tag':'form'} , 
                    ['attr']:{"method" : "dialog", "action" : "#"} , 
                    ['child'] : {
                        [0]:{
                            ['html']:{'tag':'fieldset'},
                            ['child']:{
                                [0]:{
                                    ['html']:{"tag": "legend"},
                                    ['textContent'] : {"text": "Me contacter"}

                                },//fin legend 

                                [1]:{
                                    ['html']:{'tag':'div'} , 
                                    ['attr']:{'class':'form_content',} ,
                                    ['child']:{
                                        [0]:{
                                            ['html']:{'tag':'div'} , 
                                            ['attr']:{'class':'brick'} ,
                                            ['child']:{
                                                [0]:{
                                                    ['html']:{'tag':'label'}, 
                                                    ['attr']:{'for':'lastname'} ,
                                                    ['textContent'] : {'text' : 'Nom'}
                                                },
                                                [1]:{
                                                    ['html']:{'tag':'input'} , 
                                                    ['attr']:{'id':'lastname','class':'brick__input', "type":'text', "placeholder" : "Mon Nom"} ,
                                                }
                                            }
                                        },
                                        [1]:{
                                            ['html']:{'tag':'div'} , 
                                            ['attr']:{'class':'brick'} ,
                                            ['child']:{
                                                [0]:{
                                                    ['html']:{'tag':'label'} , 
                                                    ['attr']:{'for':'lastname'} ,
                                                    ['textContent'] : {'text' : 'Prénom'}
                                                },
                                                [1]:{
                                                    ['html']:{'tag':'input'} , 
                                                    ['attr']:{'id':'lastName','class':'brickInput brick-special', "type":'text', "placeholder" : "Mon prénom","aria-label" : "test"} ,
                                                }
                                            }
                                        },                                       
                                        [2]:{
                                            ['html']:{'tag':'div'} , 
                                            ['attr']:{'class':'brick'} ,
                                            ['child']:{
                                                [0]:{
                                                    ['html']:{'tag':'label'},
                                                    ['attr']:{'for':'email'} ,
                                                    ['textContent'] : {'text' : 'Email'}
                                                },
                                                [1]:{
                                                    ['html']:{'tag':'input'}, 
                                                    ['attr']:{'id':'email','class':'brick__input', "type":'emial', "placeholder" : "Email"} ,
                                                }
                                            }
                                        },
                                        [3]:{
                                            ['html']:{'tag':'div'} , 
                                            ['attr']:{'class':'brick'} ,
                                            ['child']:{
                                                [0]:{
                                                    ['html']:{'tag':'label'},
                                                    ['attr']:{'for':'message'} ,
                                                    ['textContent'] : {'text' : 'Votre message'}
                                                },
                                                [1]:{
                                                    ['html']:{'tag':'textarea'} , 
                                                    ['attr']:{'id':'message','class':'brick__input', "placeholder" : "Message", "rows" : "5", "cols" : "28"}
                                                }
                                            }
                                        },
                                        [4]:{
                                            ['html']:{'tag':'button'},
                                            ['textContent'] : {'text' : "Envoyer"}
                                            
                                        }


                                    }//.form_content['child']       
                                }//.form_content

                                   
                            
                            }//fieldset['child']
                        }//Fieldset 


                    }//form['child']         
                }//form


            }////div.dalogBox['child']
        }//div.dalogBox
        
    }

