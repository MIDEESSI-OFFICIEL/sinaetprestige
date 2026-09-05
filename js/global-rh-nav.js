(function(){
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('a[href="tel:+33617420628"]').forEach(function(link){link.href='tel:+33972226526';link.textContent='+33 9 72 22 65 26';});
    var textWalker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    var textNodes=[];
    while(textWalker.nextNode()){
      if(textWalker.currentNode.parentElement && !/^(SCRIPT|STYLE)$/.test(textWalker.currentNode.parentElement.tagName))textNodes.push(textWalker.currentNode);
    }
    textNodes.forEach(function(node){node.nodeValue=node.nodeValue.replace(/06 17 42 06 28/g,'+33 9 72 22 65 26').replace(/Référente handicap : Varvara ALFRED/g,'Référente handicap : Varvara Alfred');});
    document.querySelectorAll('script[type="application/ld+json"]').forEach(function(script){script.textContent=script.textContent.replace(/06 17 42 06 28/g,'+33 9 72 22 65 26');});
    var contactForm=document.querySelector('#contact-form');
    if(contactForm && !contactForm.querySelector('[name="profil"]')){
      var profileField=document.createElement('div');
      profileField.className='sp-field';
      profileField.innerHTML='<label for="contact-form-profil">Profil *</label><select id="contact-form-profil" name="profil" required><option value="">Sélectionnez votre profil</option><option>Demandeur d’emploi</option><option>Cadre</option><option>Salarié</option><option>Indépendant</option><option>Étudiant</option><option>Entreprise</option><option>Autre</option></select>';
      (contactForm.querySelector('.sp-form-grid')||contactForm).appendChild(profileField);
    }
    if(document.querySelector('.sp-documents')){
      document.body.classList.add('resources-page');
      var resourcesStyles=document.createElement('link');
      resourcesStyles.rel='stylesheet';
      resourcesStyles.href='css/ressources-home.css';
      document.head.appendChild(resourcesStyles);
    }
    if(!document.querySelector('link[href*="font-awesome"]')){
      var iconStyles=document.createElement('link');
      iconStyles.rel='stylesheet';
      iconStyles.href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
      document.head.appendChild(iconStyles);
    }
    var aboutIconMap={'▣':'fa-solid fa-compass','♧':'fa-solid fa-users','⌕':'fa-solid fa-magnifying-glass','◎':'fa-solid fa-gears','✥':'fa-solid fa-lightbulb','↗':'fa-solid fa-arrow-up-right-from-square','▥':'fa-solid fa-list-check','🎓':'fa-solid fa-graduation-cap','♟':'fa-solid fa-user-tie','♙':'fa-solid fa-user-tie','◉':'fa-solid fa-chart-line','☼':'fa-solid fa-lightbulb','⌑':'fa-solid fa-store','♢':'fa-solid fa-handshake','▷':'fa-solid fa-play','▤':'fa-regular fa-file-lines','ⓘ':'fa-solid fa-circle-info','❝':'fa-solid fa-quote-left','❞':'fa-solid fa-quote-left','✣':'fa-solid fa-puzzle-piece','⌖':'fa-solid fa-location-dot','⌄':'fa-solid fa-chevron-down','☰':'fa-solid fa-bars'};
    var aboutPage=document.querySelector('.page-about-reference');
    if(aboutPage){
      Object.keys(aboutIconMap).forEach(function(symbol){
        aboutPage.querySelectorAll('i').forEach(function(icon){if(icon.textContent.trim()===symbol){icon.className=aboutIconMap[symbol];icon.setAttribute('aria-hidden','true');icon.textContent='';}});
        aboutPage.querySelectorAll('.sp-actions a,.orbit,.outline-btn,.event-card span,.about-cta span,.faq-item strong,.sp-toggle-global').forEach(function(element){element.innerHTML=element.innerHTML.split(symbol).join('<i class="'+aboutIconMap[symbol]+'" aria-hidden="true"></i>');});
      });
    }
    var header=document.querySelector('.site-head-global');
    var nav=header&&header.querySelector('.site-nav');
    if(nav){
      if(window.innerWidth<=850){
        nav.style.width='calc(100% - 28px)';
        nav.style.margin='0 auto';
        nav.style.flexWrap='nowrap';
      }
      var current=decodeURIComponent(window.location.pathname.split('/').pop()||'index.html').replace(/\.html$/,'');
      var resourcePages=['ressources','catalogues-plaquettes','actualites','articles','webinaires-masterclass','veille-rh-juridique','videos','evenements','financements','qualite-accessibilite','presse','faq','international'];
      var resourceActive=resourcePages.indexOf(current)>-1;
      var link=function(href,label,key){return '<a'+(key===current?' class="active"':'')+' href="'+href+'">'+label+'</a>';};
      nav.innerHTML='<a class="brand" href="index.html" aria-label="Sina &amp; Prestige - Accueil"><img src="images/LOGO_OFFICIEL_SINA_PRESTIGE_NE_PAS_MODIFIER.png" alt="Sina &amp; Prestige"><span class="brand-text">SINA &amp; PRESTIGE<small>ALFRED HR CONSULTING</small></span></a><button class="sp-toggle-global" type="button" aria-label="Ouvrir le menu" aria-controls="globalMenu" aria-expanded="false">☰</button><div class="nav-links" id="globalMenu">'+link('index.html','Accueil','index')+link('recrutement.html','Recrutement','recrutement')+link('webinaires-masterclass.html','Webinaires &amp; Masterclass','webinaires-masterclass')+link('accompagnement-rh.html','Accompagnement RH','accompagnement-rh')+link('formations.html','Formations','formations')+link('entreprise.html','Entreprise &amp; Partenaires','entreprise')+link('qualite-accessibilite.html','Qualité &amp; accessibilité','qualite-accessibilite')+link('a-propos.html','À propos','a-propos')+'<div class="resources-menu"><a href="ressources.html" class="resources-link'+(resourceActive?' active':'')+'" aria-haspopup="true" aria-expanded="false">Ressources <span aria-hidden="true">⌄</span></a><div class="resources-dropdown" role="menu"><a href="ressources.html" role="menuitem">Toutes les ressources</a><a href="catalogues-plaquettes.html" role="menuitem">Catalogues &amp; plaquettes</a><a href="actualites.html" role="menuitem">Actualités RH</a><a href="articles.html" role="menuitem">Articles &amp; conseils</a><a href="webinaires-masterclass.html" role="menuitem">Webinaires &amp; masterclass</a><a href="veille-rh-juridique.html" role="menuitem">Veille RH &amp; juridique</a><a href="videos.html" role="menuitem">Vidéos</a><a href="evenements.html" role="menuitem">Événements</a><a href="financements.html" role="menuitem">Dispositifs &amp; financements</a><a href="qualite-accessibilite.html" role="menuitem">Qualité &amp; accessibilité</a><a href="presse.html" role="menuitem">Presse &amp; médias</a><a href="faq.html" role="menuitem">FAQ</a><a href="international.html" role="menuitem">International</a></div></div><a class="nav-cta" href="contact.html">CONTACT</a></div>';
      if(window.innerWidth<=850){
        nav.style.position='absolute';
        nav.style.left='14px';
        nav.style.right='14px';
        nav.style.top='0';
        nav.style.width='auto';
        nav.style.height='100%';
        nav.style.justifyContent='flex-start';
        nav.querySelector('.brand').style.marginRight='0';
        nav.querySelector('.brand').style.position='absolute';
        nav.querySelector('.brand').style.left='0';
        nav.querySelector('.brand').style.top='50%';
        nav.querySelector('.brand').style.transform='translateY(-50%)';
        nav.querySelector('.sp-toggle-global').style.position='absolute';
        nav.querySelector('.sp-toggle-global').style.right='0';
        nav.querySelector('.sp-toggle-global').style.top='50%';
        nav.querySelector('.sp-toggle-global').style.transform='translateY(-50%)';
        nav.querySelector('.sp-toggle-global').style.margin='0';
      }
    }
    var oldFooter=document.querySelector('body > footer');
    if(oldFooter){
      oldFooter.outerHTML='<footer class="site-footer-unified" role="contentinfo"><div class="site-footer-grid"><div class="site-footer-brand"><a href="index.html"><img src="images/LOGO_OFFICIEL_SINA_PRESTIGE_NE_PAS_MODIFIER.png" alt="Sina &amp; Prestige"><span>SINA &amp; PRESTIGE<small>ALFRED HR CONSULTING</small></span></a><p>Sina &amp; Prestige - Alfred HR Consulting</p><p>Organisme de formation certifié Qualiopi.</p><p>Situé à Paris, France</p><p><a href="mailto:contact@sinaetprestige.fr">contact@sinaetprestige.fr</a><br><a href="tel:+33972226526">+33 9 72 22 65 26</a></p><p>Numéro de Déclaration d’Activité : 11757330575<br>SIREN : 808 790 943<br>SIRET : 808 790 943 00019</p><p>Référente handicap : <a href="mailto:varvara.alfred@sinaetprestige.fr">Varvara Alfred</a></p></div><div><h2>Services</h2><a href="formations.html">Formations</a><a href="recrutement.html">Recrutement</a><a href="accompagnement-rh.html">Accompagnement RH</a><a href="entreprise.html">Entreprises &amp; Partenaires</a><a href="employabilite.html">Employabilité</a></div><div><h2>Ressources</h2><a href="ressources.html">Toutes les ressources</a><a href="catalogues-plaquettes.html">Catalogues &amp; plaquettes</a><a href="actualites.html">Actualités RH</a><a href="articles.html">Articles &amp; conseils</a><a href="webinaires-masterclass.html">Webinaires &amp; masterclass</a><a href="videos.html">Vidéos</a><a href="financements.html">Financements</a></div><div><h2>Informations</h2><a href="financements.html">Dispositifs &amp; financements</a><a href="qualite-accessibilite.html">Qualité &amp; accessibilité</a><a href="contact.html">Contact</a><a href="mentions-legales.html">Mentions légales</a><a href="confidentialite.html">Confidentialité</a><a href="cgv.html">CGV / CGU</a></div></div><div class="site-footer-certification"><a href="pdfs/certificat-qualiopi-officiel.pdf" target="_blank" rel="noopener"><img src="images/qualiopi.png" alt="Certification Qualiopi - certificat QUA009621"><span>Certification Qualiopi<br><strong>Certificat en cours de validité</strong><br>N° certificat : QUA009621</span></a></div><div class="site-footer-bottom"><span>© 2026 Sina &amp; Prestige — Tous droits réservés.</span><span><a href="accessibilite.html">Accessibilité</a> · <a href="reclamations.html">Réclamations</a></span></div></footer>';
    }
    if(!document.querySelector('.site-widgets')){
      document.body.insertAdjacentHTML('beforeend','<div class="site-widgets"><button class="site-widget-button" type="button" data-widget="search" aria-label="Rechercher" title="Rechercher"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i></button><a class="site-widget-button" href="contact.html" aria-label="Nous contacter" title="Nous contacter"><i class="fa-solid fa-envelope" aria-hidden="true"></i></a><button class="site-widget-button site-widget-top" type="button" data-widget="top" aria-label="Retour en haut" title="Retour en haut"><i class="fa-solid fa-arrow-up" aria-hidden="true"></i></button></div><section class="site-widget-panel" data-panel="search" aria-label="Recherche" hidden><button class="site-widget-close" type="button" aria-label="Fermer">×</button><h2>Rechercher sur le site</h2><input class="site-search-input" type="search" placeholder="Formation, recrutement, ressource…" autocomplete="off"><div class="site-search-results" aria-live="polite"></div></section>');
      var pages=[['Formations','formations.html'],['Recrutement','recrutement.html'],['Accompagnement RH','accompagnement-rh.html'],['Employabilité','employabilite.html'],['Ressources','ressources.html'],['Catalogues & plaquettes','catalogues-plaquettes.html'],['Actualités RH','actualites.html'],['Articles & conseils','articles.html'],['Webinaires & masterclass','webinaires-masterclass.html'],['Vidéos','videos.html'],['Financements','financements.html'],['Qualité & accessibilité','qualite-accessibilite.html'],['Contact','contact.html']];
      var closePanels=function(){document.querySelectorAll('.site-widget-panel').forEach(function(panel){panel.hidden=true;});};
      document.querySelectorAll('[data-widget]').forEach(function(button){button.addEventListener('click',function(){var name=button.dataset.widget;if(name==='top'){window.scrollTo({top:0,behavior:'smooth'});return;}var panel=document.querySelector('[data-panel="'+name+'"]');if(panel){var wasOpen=!panel.hidden;closePanels();panel.hidden=wasOpen;panel.querySelector('input,button:not(.site-widget-close)')?.focus();}});});
      document.querySelectorAll('.site-widget-close').forEach(function(button){button.addEventListener('click',closePanels);});
      var searchInput=document.querySelector('.site-search-input'),results=document.querySelector('.site-search-results');
      if(searchInput)searchInput.addEventListener('input',function(){var query=searchInput.value.trim().toLowerCase();results.innerHTML='';if(!query){results.textContent='Saisissez un mot-clé pour commencer.';return;}pages.filter(function(page){return page[0].toLowerCase().includes(query);}).forEach(function(page){var link=document.createElement('a');link.href=page[1];link.textContent=page[0];results.appendChild(link);});if(!results.children.length)results.textContent='Aucun résultat.';});
      window.addEventListener('scroll',function(){document.querySelector('.site-widget-top')?.classList.toggle('is-visible',window.scrollY>500);},{passive:true});
      if(!localStorage.getItem('sina-cookie-choice'))document.body.insertAdjacentHTML('beforeend','<aside class="site-cookie" role="dialog" aria-label="Gestion des cookies"><div class="site-cookie-icon" aria-hidden="true"><i class="fa-solid fa-cookie-bite"></i></div><div class="site-cookie-copy"><strong>Respect de votre vie privée</strong><p>Ce site utilise uniquement les cookies nécessaires à son fonctionnement.</p></div><div class="site-cookie-actions"><button type="button" data-cookie="ok">J’accepte</button><button type="button" data-cookie="close">Fermer</button></div></aside>');
      document.querySelectorAll('[data-cookie]').forEach(function(button){button.addEventListener('click',function(){localStorage.setItem('sina-cookie-choice',button.dataset.cookie);button.closest('.site-cookie').remove();});});
    }
    var btn=document.querySelector('.sp-toggle-global');
    var menu=document.getElementById('globalMenu');
    if(aboutPage){
      aboutPage.querySelectorAll('i[class*="fa-"]').forEach(function(icon){
        icon.setAttribute('aria-hidden','true');
        icon.textContent='';
      });
      var menuToggle=aboutPage.querySelector('.sp-toggle-global');
      if(menuToggle)menuToggle.innerHTML='<i class="fa-solid fa-bars" aria-hidden="true"></i>';
      var iconTextWalker=document.createTreeWalker(aboutPage,NodeFilter.SHOW_TEXT);
      var iconTextNodes=[];
      while(iconTextWalker.nextNode()){
        if(/[♙❝❞ⓘ]/.test(iconTextWalker.currentNode.nodeValue))iconTextNodes.push(iconTextWalker.currentNode);
      }
      iconTextNodes.forEach(function(textNode){
        var fragment=document.createDocumentFragment();
        textNode.nodeValue.split(/([♙❝❞ⓘ])/).forEach(function(part){
          if(!part)return;
          if(!aboutIconMap[part]){fragment.appendChild(document.createTextNode(part));return;}
          var icon=document.createElement('i');
          icon.className=aboutIconMap[part];
          icon.setAttribute('aria-hidden','true');
          fragment.appendChild(icon);
        });
        textNode.parentNode.replaceChild(fragment,textNode);
      });
    }
    if(btn&&menu){
      btn.addEventListener('click',function(){
        var open=menu.classList.toggle('is-open');
        btn.setAttribute('aria-expanded',open?'true':'false');
      });
    }

    document.querySelectorAll('.resources-menu').forEach(function(item){
      var dropdown=item.querySelector('.resources-dropdown');
      if(dropdown && !dropdown.querySelector('a[href="international.html"]')){
        var link=document.createElement('a');
        link.href='international.html';
        link.setAttribute('role','menuitem');
        link.textContent='International';
        dropdown.appendChild(link);
      }
      var trigger=item.querySelector('.resources-link');
      if(!trigger)return;
      trigger.addEventListener('click',function(e){
        /* Keep the first click as a real navigation on desktop, but allow the
           dropdown to open on touch/mobile where hover is unavailable. */
        if(window.matchMedia('(max-width: 850px)').matches){
          if(!item.classList.contains('is-open')){
            e.preventDefault();
            item.classList.add('is-open');
            trigger.setAttribute('aria-expanded','true');
          }
        }
      });
    });

    document.addEventListener('click',function(e){
      document.querySelectorAll('.resources-menu.is-open').forEach(function(item){
        if(!item.contains(e.target)){
          item.classList.remove('is-open');
          var trigger=item.querySelector('.resources-link');
          if(trigger)trigger.setAttribute('aria-expanded','false');
        }
      });
    });
  });
})();
