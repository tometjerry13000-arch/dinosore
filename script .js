// script.js - Version ULTRA-RÉALISTE avec Cohérence Totale

console.log("🚀 Chargement de script.js...");

// Exposer les fonctions de actions.js
if (typeof personnageActions !== 'undefined' && !window.personnageActions) {
    window.personnageActions = personnageActions;
    window.getRandomDecor = getRandomDecor;
    window.getRandomAction = getRandomAction;
    console.log("✅ actions.js exposé globalement");
}

// ==================== CLASSE PRINCIPALE ====================
class PromptGenerator {
    constructor() {
        this.userData = {};
        this.typeMapping = {
            'default': 'pirate',
            'fairy': 'fairy',
            'vampire': 'vampire',
            'elf': 'elf',
            'superman': 'superman',
            'cowgirl': 'cowgirl',
            'pirate': 'pirate',
            'princess': 'princess',
            'siren': 'siren',
            'cavewoman': 'cavewoman',
            'athena': 'athena',
            'avatar': 'avatar',
            'avatarwarrior': 'avatarwarrior',
            'avatarchief': 'avatarchief'
        };
    }

    getActionType(personnageKey) {
        if (!countries || !countries[personnageKey]) return 'default';
        let type = countries[personnageKey].type || personnageKey;
        const actions = window.personnageActions || {};
        if (actions[type]) return type;
        if (this.typeMapping[type]) return this.typeMapping[type];
        return 'default';
    }

    getRandomDecor(personnageKey) {
        if (typeof window.getRandomDecor === 'function') {
            return window.getRandomDecor(personnageKey);
        }
        return "dans un studio de danse professionnel";
    }

    getRandomAction(personnageKey) {
        if (typeof window.getRandomAction === 'function') {
            return window.getRandomAction(personnageKey);
        }
        return "elle danse sensuellement face caméra";
    }

    // ===== DÉCOR UNIFIÉ =====
    getUnifiedDecor() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) return "studio professionnel";
        
        const countryKey = selected.dataset.country;
        const country = countries[countryKey];
        
        // PRIORITÉ 1: Décor personnalisé
        const customEnabled = document.getElementById('enableCustomDecor')?.checked || false;
        const customText = document.getElementById('customDecorText')?.value || '';
        if (customEnabled && customText.trim() !== '') {
            return customText.trim();
        }
        
        // PRIORITÉ 2: Décor aléatoire du type de personnage
        const actionType = this.getActionType(countryKey);
        const randomDecor = this.getRandomDecor(actionType);
        if (randomDecor && randomDecor !== "studio professionnel") {
            return randomDecor;
        }
        
        // PRIORITÉ 3: Background du pays
        if (country && country.background) {
            return country.background;
        }
        
        return "dans un studio de danse professionnel";
    }

    // ===== FINALE SPECTACULAIRE =====
    getFinaleGesture() {
        const gestures = [];
        if (document.getElementById('finalBisou')?.checked) 
            gestures.push('elle envoie UN DERNIER BISOU LANGOUREUX à la caméra, ses doigts effleurant ses lèvres avant de s\'ouvrir lentement vers le spectateur, les yeux mi-clos dans un regard de désir');
        if (document.getElementById('finalCiao')?.checked) 
            gestures.push('elle fait un "CIAO" SENSUEL de la main, ses doigts bougeant gracieusement, un sourire complice aux lèvres');
        if (document.getElementById('finalCoeur')?.checked) 
            gestures.push('elle forme un CŒUR AVEC SES MAINS au-dessus de sa tête, puis le porte lentement à sa poitrine en fermant les yeux');
        if (document.getElementById('finalClignement')?.checked) 
            gestures.push('elle fait un LONG CLIN D\'ŒIL APPUYÉ, sa paupière s\'abaissant très lentement, accompagné d\'un sourire en coin charmeur');
        if (document.getElementById('finalRegard')?.checked) 
            gestures.push('elle FIXE LA CAMÉRA INTENSÉMENT, ses yeux plongeant dans ceux du spectateur, puis un sourire lent naît sur ses lèvres');
        if (document.getElementById('finalEpaule')?.checked) 
            gestures.push('elle DÉCOUVRE LENTEMENT SON ÉPAULE en faisant glisser le tissu, regardant la caméra avec un air de défi sensuel');
        
        if (gestures.length === 0) return 'elle envoie un dernier bisou du bout des doigts';
        if (gestures.length === 1) return gestures[0];
        
        const last = gestures.pop();
        return gestures.join(', ') + ', puis enfin ' + last;
    }

    getFinalOption() {
        const option = document.getElementById('finalOption')?.value || 'freeze';
        const options = {
            'freeze': `l'image se fige sur CE MOMENT PRÉCIS, ses yeux continuant de vivre, un léger sourire aux lèvres, comme une photographie sensuelle qui dure 2 secondes`,
            'fondu': `un FONDU AU NOIR PROGRESSIF enveloppe l'image, partant des bords pour terminer sur son regard, comme une porte qui se ferme doucement`,
            'zoom': `un ZOOM LENT ET DOUX sur son visage, capturant l'émotion de son regard, ses yeux devenant plus grands à l'écran`
        };
        return options[option] || options['freeze'];
    }

    getPublicInteraction() {
        const interaction = document.getElementById('finalInteraction')?.value || 'regard';
        const interactions = {
            'regard': 'elle plonge son regard DROIT DANS LES YEUX DU SPECTATEUR, créant une connexion intime',
            'sourire': 'elle offre un SOURIRE ÉCLATANT, comme si elle ne dansait que pour LUI',
            'clin': 'elle fait un CLIN D\'ŒIL COMPLICE, comme un secret partagé'
        };
        return interactions[interaction] || interactions['regard'];
    }

    // ===== COLLECTE DES DONNÉES =====
    collectUserData() {
        const selected = document.querySelector('.character-card.selected');
        const countryKey = selected ? selected.dataset.country : 'spain';
        
        this.userData = {
            country: countryKey,
            leftColor: document.getElementById('leftPalmColor').value,
            rightColor: document.getElementById('rightPalmColor').value,
            leftName: this.getColorName(document.getElementById('leftPalmColor').value),
            rightName: this.getColorName(document.getElementById('rightPalmColor').value),
            startingTop: document.getElementById('startingTop').value,
            startingBottom: document.getElementById('startingBottom').value,
            startingDetails: document.getElementById('startingDetails').value,
            finalOutfit: document.getElementById('finalOutfitDescription').value,
            naturalHair: document.getElementById('naturalHair')?.value || 'bruns',
            enableFluo: document.getElementById('enableFluo')?.checked || false,
            fluoColor: document.getElementById('fluoColor')?.value || 'rose fluo',
            fluoIntensity: document.getElementById('fluoIntensity')?.value || 9,
            hairStyle: document.getElementById('hairStyle')?.value || 'détachés',
            seductionLevel: document.getElementById('seductionLevel')?.value || 9,
            gestures: {
                regards: document.getElementById('gesteRegards')?.checked || false,
                sourires: document.getElementById('gesteSourires')?.checked || false,
                clins: document.getElementById('gesteClins')?.checked || false,
                levres: document.getElementById('gesteLevres')?.checked || false,
                mains: document.getElementById('gesteMains')?.checked || false,
                cheveux: document.getElementById('gesteCheveux')?.checked || false,
                bisous: document.getElementById('gesteBisous')?.checked || false,
                bisousCount: document.getElementById('bisousCount')?.value || 3,
                viens: document.getElementById('gesteViens')?.checked || false,
                viensCount: document.getElementById('viensCount')?.value || 4
            },
            effects: {
                confettis: document.getElementById('effectConfettis')?.checked || false,
                poudre: document.getElementById('effectPoudre')?.checked || false,
                petales: document.getElementById('effectPétales')?.checked || false,
                lumieres: document.getElementById('effectLumières')?.checked || false,
                paillettes: document.getElementById('effectPaillettes')?.checked || false,
                feu: document.getElementById('effectFeu')?.checked || false
            },
            musicStyle: document.getElementById('musicStyle')?.value || 'traditionnelle',
            floatingEnabled: document.getElementById('enableMagicTexts')?.checked || false,
            floatingWords: {
                follow: document.getElementById('textFollow')?.checked || false,
                like: document.getElementById('textLike')?.checked || false,
                heart: document.getElementById('textHeart')?.checked || false
            },
            floatingColor: document.getElementById('textColor')?.value || '#ff6b6b',
            floatingColor2: document.getElementById('textColor2')?.value || '#4ecdc4',
            customDecor: {
                enabled: document.getElementById('enableCustomDecor')?.checked || false,
                text: document.getElementById('customDecorText')?.value || ''
            },
            finale: {
                option: document.getElementById('finalOption')?.value || 'freeze',
                interaction: document.getElementById('finalInteraction')?.value || 'regard'
            }
        };
    }

    getColorName(hex) {
        const colors = {
            '#ff0000': 'rouge passion', '#ff4500': 'orange brûlé', '#ff00ff': 'rose fuchsia',
            '#00ff00': 'vert émeraude', '#0000ff': 'bleu Majorelle', '#ffff00': 'jaune soleil',
            '#ffd700': 'or étincelant', '#c0c0c0': 'argent métallique', '#000000': 'noir profond',
            '#ffffff': 'blanc pur'
        };
        return colors[hex.toLowerCase()] || 'couleur personnalisée';
    }

    getSeductionPhrase(level) {
        if (level <= 3) return 'subtile, charmeuse légère';
        if (level <= 6) return 'charmeuse, coquine';
        return 'ultra-séductrice, magnétique, explosive';
    }

    // ===== GÉNÉRATION PARTIE 1 =====
    generatePart1() {
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        
        let gesturesText = '';
        if (this.userData.gestures.regards) gesturesText += '- Elle fixe la caméra avec des regards intenses et charmeurs\n';
        if (this.userData.gestures.sourires) gesturesText += '- Sourires en coin, coquins, charmeurs\n';
        if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil complices et lents\n';
        if (this.userData.gestures.levres) gesturesText += '- Elle mord sa lèvre inférieure en vous fixant\n';
        if (this.userData.gestures.mains) gesturesText += '- Ses mains caressent son corps (cou, épaules, seins, hanches)\n';
        if (this.userData.gestures.cheveux) gesturesText += '- Jeux avec ses cheveux, elle les caresse, les rejette\n';
        if (this.userData.gestures.bisous) {
            gesturesText += `- Elle envoie des baisers du bout des doigts vers la caméra (${this.userData.gestures.bisousCount} fois)\n`;
        }
        if (this.userData.gestures.viens) {
            gesturesText += `- Elle fait le geste "viens vers moi" avec son index (${this.userData.gestures.viensCount} fois)\n`;
        }

        const danceMoves = (danceMoves && danceMoves[this.userData.country]?.part1) ? 
            danceMoves[this.userData.country].part1.join('\n    - ') : 
            'mouvements sensuels';

        return `Une transition de danse synchronisée à haute énergie en 4k, basée sur l'image fournie - PREMIÈRE PARTIE de 6 secondes.

LE SUJET :
- Femme magnifique, totalement silencieuse - elle ne parle pas, elle danse uniquement
- Visage parfaitement identique à l'image de référence - traits reconnaissables, conservés avec précision

👇 INSTRUCTIONS ULTRA-RÉALISTES POUR UN VISAGE HUMAIN AUTHENTIQUE 👇
- Rendu hyper réaliste style photo professionnelle (PAS DE RENDU IA LISSE)
- Peau avec texture naturelle : pores visibles à différentes échelles, relief cutané
- Imperfections subtiles conservées : petits grains de beauté, rougeurs légères, variations de teinte
- Poils de duvet très fins visibles sur les joues et le contour du visage
- Cils : chaque cil est individuel, courbé naturellement, pas en paquets
- Sourcils : poils dessinés un par un, avec différentes directions et épaisseurs
- Lèvres : texture naturelle avec de minuscules ridules, reflets humides

👁️ YEUX ULTRA-RÉALISTES 8K :
- Iris hyper détaillés avec motifs complexes (comme une photo macro)
- Vaisseaux sanguins très fins visibles dans le blanc de l'œil
- Reflets multiples dans les yeux (catchlights) nets et naturels
- Pupilles qui réagissent à la lumière
- Netteté maximale sur les yeux (point focal de l'image)

ÉCLAIRAGE CINÉMATOGRAPHIQUE NATUREL :
- Éclairage de type Rembrandt doux : triangle de lumière sur la joue
- Source principale à 45°, ombres naturelles qui sculptent les volumes
- Reflets naturels dans les yeux qui donnent de la vie au regard
- La lumière révèle la texture de la peau, ne la gomme pas

RENDU PHOTOGRAPHIQUE AUTHENTIQUE :
- Grain de film léger pour éviter l'aspect "plastique" des IA
- Pas de filtre beauté, pas de lissage excessif
- Le visage doit être indiscernable d'une vraie photo professionnelle
- Asymétries naturelles du visage conservées (pas de symétrie parfaite)

Expression ${seductionPhrase} : elle joue avec le spectateur, le captive, le séduit
Regards complices et coquins

LES MAINS PEINTES (COULEURS ANNONÇATRICES) :
- Paume gauche : peinture ${this.userData.leftName}
- Paume droite : peinture ${this.userData.rightName}
- Poudre scintillante sur les doigts
- Les deux couleurs restent parfaitement distinctes et ne se mélangent pas
- Elle joue avec ses mains face caméra, les tourne, les admire
- Ces deux couleurs annoncent les teintes dominantes de sa future tenue

TENUE DE DÉPART (SERA COMPLÈTEMENT REMPLACÉE) :
- Haut : ${this.userData.startingTop}
- Bas : ${this.userData.startingBottom}
- Détails : ${this.userData.startingDetails}
- Cheveux dans leur couleur naturelle : ${this.userData.naturalHair}

DANSE AVANT TRANSFORMATION - MOUVEMENTS PRÉCIS :
La personne exécute une danse ${country.dance} sensuelle et ${seductionPhrase} :
    - ${danceMoves}

GESTES DE SÉDUCTION :
${gesturesText}

JEUX DE REGARDS :
- Elle fixe la caméra droit dans les yeux
- Elle bat des cils lentement
- Elle suit les mouvements du spectateur
- Elle regarde de bas en haut sensuellement

${this.generateFloatingTexts('part1')}

TRANSITION :
Au moment le plus intense de sa danse, elle rapproche ses mains peintes de l'objectif dans un geste théâtral et sensuel, les plaquant contre la caméra pour masquer entièrement l'image, cachant complètement la vue pendant la fin de cette première partie. Elle laisse deviner un sourire mystérieux juste avant que ses mains ne couvrent l'objectif.

IMPORTANT - PRÉPARATION POUR LA PARTIE 2 :
- Pendant que les mains cachent l'objectif (fin de cette partie), elle aura le temps de SE CHANGER COMPLÈTEMENT
- La transformation (nouvelle tenue, nouveaux cheveux, nouveau maquillage, effets) aura lieu HORS CAMÉRA
- La PARTIE 2 commencera avec le résultat FINAL déjà visible`;
    }

    // ===== GÉNÉRATION PARTIE 2 =====
    generatePart2() {
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        
        const fluoIntensity = this.userData.fluoIntensity >= 8 ? 'éclatant, quasi phosphorescent' :
                             this.userData.fluoIntensity >= 5 ? 'brillant' : 'léger';

        let gesturesText = '';
        if (this.userData.gestures.regards) gesturesText += '- Regards encore plus intenses, magnétiques\n';
        if (this.userData.gestures.sourires) gesturesText += '- Sourires encore plus charmeurs et victorieux\n';
        if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil appuyés et complices\n';
        if (this.userData.gestures.levres) gesturesText += '- Mordillement de la lèvre plus prononcé\n';
        if (this.userData.gestures.mains) gesturesText += '- Caresses plus appuyées sur tout le corps\n';
        if (this.userData.gestures.cheveux) gesturesText += '- Jeux accentués avec ses cheveux fluo\n';
        if (this.userData.gestures.bisous) {
            gesturesText += `- Elle envoie ${this.userData.gestures.bisousCount} baisers à la caméra pendant la danse\n`;
        }
        if (this.userData.gestures.viens) {
            gesturesText += `- Elle fait le geste "viens" ${this.userData.gestures.viensCount} fois, de plus en plus charmeur\n`;
        }

        const danceMoves = (danceMoves && danceMoves[this.userData.country]?.part2) ? 
            danceMoves[this.userData.country].part2.join('\n    - ') : 
            'mouvements encore plus intenses';

        const musicText = this.generateMusicText();
        const actionType = this.getActionType(this.userData.country);
        const decorText = this.getUnifiedDecor();
        const actionAleatoire = this.getRandomAction(actionType);
        const finale = this.getFinaleGesture();
        const finalOption = this.getFinalOption();
        const publicInteraction = this.getPublicInteraction();

        return `Suite de la transition - DEUXIÈME PARTIE de 6 secondes.

CONTINUITÉ PARFAITE DU VISAGE - ABSOLUMENT CRUCIAL :
- Le sujet est STRICTEMENT IDENTIQUE à celui de la PARTIE 1
- MÊMES TRAITS, MÊME VISAGE, expression encore plus intense
- RECONNAISSABLE AU PREMIER COUP D'ŒIL - AUCUNE ERREUR POSSIBLE
- La transformation ne concerne QUE les vêtements, PAS le visage

👇 INSTRUCTIONS ULTRA-RÉALISTES RENFORCÉES (VISAGE INCHANGÉ) 👇
- Le visage est STRICTEMENT IDENTIQUE à la PARTIE 1 avec la même texture microscopique
- Même peau : pores visibles à différentes échelles, grains de beauté, rougeurs légères
- Mêmes cils individuels, mêmes sourcils avec poils distincts
- 👁️ YEUX 8K NATURELS conservés : iris hyper détaillés, vaisseaux sanguins visibles, reflets multiples nets
- Même éclairage Rembrandt qui sculpte les volumes
- Même grain de film léger, pas de lissage artificiel
- MÊMES IMPERFECTIONS NATURELLES conservées - asymétries, petits défauts
- AUCUN filtre beauté - rendu 100% naturel et humain
- Le visage doit être INDISCERNABLE d'une vraie photo professionnelle

⚠️ TRANSITION NATURELLE - INSTRUCTION CAPITALE ⚠️ :
- Pendant le court instant où les mains masquaient l'objectif (fin de la PARTIE 1), elle a eu le temps de SE CHANGER COMPLÈTEMENT
- La transformation a eu lieu HORS CAMÉRA - RIEN de magique ou d'instantané
- Dès que les mains s'écartent, le résultat FINAL est déjà visible
- AUCUN changement ne doit être visible pendant cette PARTIE 2 (cheveux déjà colorés, tenue déjà portée, maquillage déjà appliqué)
- LA TRANSFORMATION DOIT SEMBLER NATURELLE, comme un simple changement de tenue en coulisses
- PAS d'effet de morphing, pas de transition magique - c'est DÉJÀ FAIT quand les mains se retirent
- Le réalisme est PRIMORDIAL - on doit croire qu'elle s'est changée pendant que l'écran était noir

GESTES DE SÉDUCTION IMMÉDIATS DÈS LE RETRAIT DES MAINS :
${this.userData.gestures.bisous ? '- Elle envoie UN BISOUD À LA CAMÉRA dès que ses mains se retirent' : ''}
${this.userData.gestures.viens ? '- Elle fait le geste "VIENS VERS MOI" avec son doigt, lentement, en vous fixant' : ''}
- Sourire victorieux et charmeur

🎵 AMBIANCE SONORE :
${musicText}

NOUVELLE TENUE (TOTALEMENT REMPLACÉE - DÉJÀ PORTÉE) :
Elle porte maintenant une tenue spectaculaire (déjà enfilée pendant la transition) :
${this.userData.finalOutfit}

CHEVEUX TRANSFORMÉS - COULEURS FLUO (DÉJÀ COLORÉS) :
${this.userData.enableFluo ? 
`- CHANGEMENT COMPLET - Cheveux DÉJÀ colorés en ${this.userData.fluoColor} ${fluoIntensity}
- Intensité fluo maximale - ils brillent littéralement sous la lumière
- Style : ${this.userData.hairStyle}
- Cascade de couleur fluo qui scintille à chaque mouvement (DÈS LA PREMIÈRE IMAGE)
- Reflets néon qui attirent le regard` : 
`- Les cheveux conservent leur couleur naturelle (${this.userData.naturalHair})
- Coiffés élégamment (déjà fait)`}

MAQUILLAGE APPLIQUÉ (DÉJÀ FAIT) :
- Teint parfait et lumineux (déjà appliqué)
- Yeux intensifiés (déjà maquillés)
- Lèvres brillantes (déjà fait)
- Paillettes subtiles (déjà présentes)
- Peau légèrement huilée pour faire scintiller la lumière (déjà préparée)

DANSE APRÈS TRANSFORMATION - MOUVEMENTS ENCORE PLUS INTENSES :
Elle reprend sa danse ${country.dance} avec une énergie décuplée :
    - ${danceMoves}

⚡ ACTION SPÉCIALE ⚡
- ${actionAleatoire}
- Elle exécute cette action TOUT EN DANSANT DE FAÇON SENSUELLE
- Ses mouvements de danse s'intègrent parfaitement à l'action

JEUX DE SÉDUCTION ACCRUS :
${gesturesText}

JEUX AVEC LA NOUVELLE TENUE (DÉJÀ PORTÉE) :
- Jeux avec les éléments de la tenue
- Mise en valeur des atouts
- Découvertes subtiles

JEUX AVEC LES CHEVEUX FLUO (DÉJÀ COLORÉS) :
- Elle passe ses mains dans ses cheveux fluo (déjà colorés)
- Les fait virevolter en tournant
- Joue avec les mèches colorées
- Les cheveux fluo deviennent un élément central de la séduction

${this.generateFloatingTexts('part2')}

ARRIÈRE-PLAN - DÉCOR UNIFIÉ :
${decorText}

${this.generateEffects()}

🎬 FINALE SPECTACULAIRE - CONNEXION AVEC LE PUBLIC (TIMING PRÉCIS À LA 4ÈME SECONDE) :

⏱️ CHRONOLOGIE DE LA FIN (6 secondes totales) :
- SECONDES 1 à 4 : Danse intense et sensuelle comme décrite ci-dessus
- SECONDE 4 (EXACTEMENT) : Elle arrête sa chorégraphie et se tourne PLEINEMENT vers le spectateur
- SECONDE 4.5 à 5.5 : Elle exécute SON GESTE FINAL (1 seconde)
- SECONDES 5.5 à 6.5 : Elle MAINTIENT LA POSE FINALE (2 secondes)
- FIN : ${finalOption}

🎯 INTERACTION DIRECTE AVEC LE PUBLIC :
- Pendant TOUTE cette séquence finale, ${publicInteraction}
- Elle danse POUR le spectateur, PAS pour elle-même
- Chaque geste est une OFFANDE au public, une invitation à la désirer

💋 GESTE FINAL EXÉCUTÉ À LA SECONDE 4 :
${finale}

📸 MAINTIEN DE POSE SENSUEL (2 secondes) :
- Pendant le maintien, son corps reste figé mais SON VISAGE CONTINUE DE VIVRE
- Ses yeux parcourent lentement l'écran, s'attardant sur chaque spectateur imaginaire
- Sa respiration est AMPLE, sa poitrine se soulève et s'abaisse visiblement
- Un léger sourire satisfaite flotte sur ses lèvres
- Elle semble retenir son souffle, créant une tension sensuelle

CAMÉRA ET ÉCLAIRAGE :
- Caméra statique - elle danse POUR le spectateur, face à lui
- Éclairage cinématographique chaleureux et enveloppant
- Lumières spécifiques pour faire ressortir les cheveux fluo et les effets spéciaux
- Pendant le finale, la lumière se resserre sur elle (spotlight) pour accentuer le moment
- Ambiance intimiste et professionnelle

RAPPEL ULTIME - TRANSITION NATURELLE :
- La transformation est DÉJÀ TERMINÉE au début de cette partie
- AUCUNE métamorphose visible pendant ces 6 secondes
- Tout a eu lieu PENDANT que les mains cachaient l'objectif dans la PARTIE 1
- Le réalisme est ABSOLUMENT CRUCIAL - on doit croire qu'elle s'est changée en coulisses
- La FINALE est le MOMENT CLÉ à retenir - elle doit être PARFAITE`;
    }

    // ===== GÉNÉRATION DES TEXTES FLOTTANTS =====
    generateFloatingTexts(part) {
        if (!this.userData.floatingEnabled) return '';
        
        let words = [];
        if (this.userData.floatingWords.follow) words.push('"Follow Me"');
        if (this.userData.floatingWords.like) words.push('"Like Me"');
        if (this.userData.floatingWords.heart) words.push('❤️ (cœurs)');
        
        if (words.length === 0) return '';
        
        return `
✨ EFFETS TEXTES MAGIQUES ${part === 'part1' ? 'PENDANT LA PREMIÈRE PARTIE' : 'PENDANT LA DEUXIÈME PARTIE'} ✨
- Des textes ${words.join(', ')} apparaissent et flottent dans l'air autour d'elle
- Style d'affichage : néon lumineux
- Mouvement : flottant (léger)
- Couleurs : ${this.userData.floatingColor} (principal) et ${this.userData.floatingColor2} (secondaire)
- Les textes réagissent à ses mouvements et la suivent
- Effets supplémentaires : scintillement, effet 3D
- Ils apparaissent de façon magique et créent une ambiance immersive
- Parfait pour les réseaux sociaux et l'interaction avec le spectateur`;
    }

    // ===== GÉNÉRATION DES EFFETS =====
    generateEffects() {
        let effects = [];
        if (this.userData.effects.confettis) effects.push('confettis aux couleurs de la tenue');
        if (this.userData.effects.poudre) effects.push('poudre scintillante');
        if (this.userData.effects.petales) effects.push('pluie de pétales');
        if (this.userData.effects.lumieres) effects.push('lumières colorées');
        if (this.userData.effects.paillettes) effects.push('paillettes dans l\'air');
        if (this.userData.effects.feu) effects.push('flammes tourbillonnantes');
        
        if (effects.length === 0) return '';
        
        return `EFFETS SPECTACULAIRES :
Au moment où ses mains révèlent la transformation, explosion de ${effects.join(', ')}.`;
    }

    // ===== GÉNÉRATION MUSIQUE =====
    generateMusicText() {
        let music = '';
        switch(this.userData.musicStyle) {
            case 'traditionnelle': music = 'Musique traditionnelle authentique du pays'; break;
            case 'moderne': music = 'Remix moderne et électro'; break;
            case 'epique': music = 'Musique épique de film, orchestrale et puissante'; break;
            default: music = 'Musique d\'ambiance adaptée';
        }
        return music;
    }

    // ===== GÉNÉRATION CONSIGNES =====
    generateConsignes() {
        const country = countries[this.userData.country];
        
        return `CONSIGNES DE COHÉRENCE ABSOLUE :

1. VISAGE IDENTIQUE : Le sujet de la PARTIE 2 a EXACTEMENT le même visage que la PARTIE 1 - AUCUNE ERREUR POSSIBLE
2. TRANSITION NATURELLE OBLIGATOIRE : La transformation a eu lieu HORS CAMÉRA pendant que les mains cachaient l'objectif - RIEN de magique, tout est DÉJÀ FAIT au début de la partie 2
3. RENDU ULTRA-RÉALISTE DU VISAGE : Peau avec pores, grains de beauté, imperfections - PAS DE PEAU LISSE IA
4. YEUX 8K NATURELS : Iris hyper détaillés, vaisseaux visibles, reflets multiples nets
5. SILENCE TOTAL : Pas un mot - elle communique par sa danse, ses regards et ses sourires
6. SÉDUCTION MAGNÉTIQUE : Elle est charmeuse, captivante, elle joue avec le spectateur
7. GESTES DE SÉDUCTION DIRECTE : ${this.userData.gestures.bisous ? 'BISOUS à la caméra' : ''} ${this.userData.gestures.viens ? 'et gestes "VIENS"' : ''}
8. TENUE DE DÉPART COMPLÈTEMENT REMPLACÉE : Plus rien de la tenue initiale
9. CHEVEUX ${this.userData.enableFluo ? 'TRANSFORMÉS EN COULEURS FLUO' : 'CONSERVÉS NATURELS'}
10. COULEURS ANNONÇATRICES : ${this.userData.leftName} et ${this.userData.rightName} des paumes = couleurs dominantes de la tenue finale
11. MOUVEMENTS PRÉCIS : Chorégraphie technique et sensuelle
12. INSPIRATION CULTURELLE : ${country.name} - ${country.dance}
13. ⚠️ TRANSFORMATION DÉJÀ ACCOMPLIE - CRUCIAL : AUCUN changement visible pendant la PARTIE 2 - tout a eu lieu PENDANT que les mains cachaient l'objectif
14. FINALE SPECTACULAIRE : À la 4ème seconde, elle exécute son geste final face au public, maintient la pose, puis effet de fin choisi`;
    }

    // ===== GÉNÉRATION COMPLÈTE =====
    generateFullPrompt() {
        this.collectUserData();
        
        let part1 = this.generatePart1();
        let part2 = this.generatePart2();
        let consignes = this.generateConsignes();
        
        return {
            part1: part1,
            part2: part2,
            consignes: consignes,
            full: part1 + '\n\n' + part2 + '\n\n' + consignes
        };
    }
}

// ==================== FONCTIONS D'INITIALISATION ====================

function initCharacters() {
    console.log("🎭 Initialisation des personnages...");
    const grid = document.getElementById('countryGrid');
    if (!grid) return;
    
    if (!countries || Object.keys(countries).length === 0) {
        grid.innerHTML = '<div style="color: red; padding: 20px;">Erreur: Personnages non chargés</div>';
        return;
    }
    
    let html = '';
    for (const [key, country] of Object.entries(countries)) {
        html += `<div class="character-card" data-country="${key}">${country.name}</div>`;
    }
    grid.innerHTML = html;
    
    const firstCard = document.querySelector('.character-card');
    if (firstCard) {
        firstCard.classList.add('selected');
        const span = document.querySelector('#selectedCountry span');
        if (span) span.textContent = countries[firstCard.dataset.country].name;
    }
    
    document.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.character-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            const span = document.querySelector('#selectedCountry span');
            if (span) span.textContent = countries[this.dataset.country].name;
        });
    });
    
    const search = document.getElementById('characterSearch');
    if (search) {
        search.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase();
            document.querySelectorAll('.character-card').forEach(card => {
                card.style.display = card.textContent.toLowerCase().includes(val) ? 'block' : 'none';
            });
        });
    }
}

function initImageUpload() {
    const area = document.getElementById('uploadArea');
    const input = document.getElementById('imageInput');
    const preview = document.getElementById('imagePreview');
    const img = document.getElementById('previewImg');
    const remove = document.getElementById('removeImage');
    
    if (!area || !input || !preview || !img || !remove) return;
    
    area.addEventListener('click', () => input.click());
    
    area.addEventListener('dragover', (e) => {
        e.preventDefault();
        area.style.borderColor = '#00f3ff';
    });
    
    area.addEventListener('dragleave', () => {
        area.style.borderColor = '';
    });
    
    area.addEventListener('drop', (e) => {
        e.preventDefault();
        area.style.borderColor = '';
        const file = e.dataTransfer.files[0];
        if (file?.type.startsWith('image/')) handleImage(file);
    });
    
    input.addEventListener('change', (e) => {
        if (e.target.files[0]) handleImage(e.target.files[0]);
    });
    
    remove.addEventListener('click', () => {
        preview.style.display = 'none';
        area.style.display = 'flex';
        input.value = '';
        img.src = '#';
    });
    
    function handleImage(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            img.src = e.target.result;
            preview.style.display = 'block';
            area.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
}

function displayPrompt(prompts, tabId) {
    const display = document.getElementById('promptDisplay');
    if (!display) return;
    
    let text = '';
    switch(tabId) {
        case 'tabFull': text = prompts.full || ''; break;
        case 'tabPart1': text = prompts.part1 || ''; break;
        case 'tabPart2': text = prompts.part2 || ''; break;
        case 'tabConsignes': text = prompts.consignes || ''; break;
    }
    
    display.innerHTML = text.replace(/\n/g, '<br>');
}

function updateRecap() {
    const selected = document.querySelector('.character-card.selected');
    if (!selected || !countries) return;
    
    const country = countries[selected.dataset.country];
    const recap = document.getElementById('recapContent');
    if (recap) {
        recap.innerHTML = `🌍 ${country.name}<br>💃 ${country.dance}`;
    }
}

function attachEvents() {
    console.log("🔗 Attachement des événements...");
    
    const generator = new PromptGenerator();
    
    document.getElementById('generatePrompt')?.addEventListener('click', function() {
        console.log("🎬 Génération...");
        const prompts = generator.generateFullPrompt();
        window.lastPrompts = prompts;
        const active = document.querySelector('.tab-btn.active');
        if (active) displayPrompt(prompts, active.id);
        updateRecap();
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const prompts = window.lastPrompts || { full: '', part1: '', part2: '', consignes: '' };
            displayPrompt(prompts, this.id);
        });
    });
    
    document.getElementById('copyPrompt')?.addEventListener('click', () => {
        const text = document.getElementById('promptDisplay').innerText;
        navigator.clipboard.writeText(text).then(() => alert('✅ Copié!'));
    });
    
    document.getElementById('clearPrompt')?.addEventListener('click', () => {
        document.getElementById('promptDisplay').innerHTML = '';
        window.lastPrompts = null;
    });
    
    document.getElementById('suggestColors')?.addEventListener('click', () => {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) return alert('Sélectionnez un personnage');
        const country = countries[selected.dataset.country];
        document.getElementById('leftPalmColor').value = country.palmColors.left;
        document.getElementById('rightPalmColor').value = country.palmColors.right;
    });
    
    document.getElementById('generateOutfit')?.addEventListener('click', () => {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) return alert('Sélectionnez un personnage');
        const country = countries[selected.dataset.country];
        document.getElementById('finalOutfitDescription').value = 
            `${country.finalOutfit.description} aux couleurs ${country.finalOutfit.colors.join(' et ')}.`;
    });
    
    // Toggles
    document.getElementById('enableMagicTexts')?.addEventListener('change', function() {
        const opt = document.getElementById('magicTextsOptions');
        if (opt) opt.style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('enableCustomDecor')?.addEventListener('change', function() {
        const opt = document.getElementById('customDecorOptions');
        if (opt) opt.style.display = this.checked ? 'block' : 'none';
    });
    
    // Sliders
    document.getElementById('fluoIntensity')?.addEventListener('input', function() {
        const labels = ['Faible','Léger','Moyen','Brillant','Éclatant','Intense','Fulgurant','Phosphorescent','Néon','AVEUGLANT'];
        document.getElementById('intensityValue').textContent = labels[this.value-1] || 'Éclatant';
    });
    
    document.getElementById('seductionLevel')?.addEventListener('input', function() {
        document.getElementById('seductionValue').textContent = this.value + '/10';
    });
    
    // Checkbox dépendantes
    const bisous = document.getElementById('gesteBisous');
    const bisousCount = document.getElementById('bisousCount');
    if (bisous && bisousCount) {
        bisousCount.disabled = !bisous.checked;
        bisous.addEventListener('change', () => bisousCount.disabled = !bisous.checked);
    }
    
    const viens = document.getElementById('gesteViens');
    const viensCount = document.getElementById('viensCount');
    if (viens && viensCount) {
        viensCount.disabled = !viens.checked;
        viens.addEventListener('change', () => viensCount.disabled = !viens.checked);
    }
}

function startApp() {
    console.log("🚀 Démarrage...");
    initCharacters();
    initImageUpload();
    attachEvents();
    console.log("✅ Application prête!");
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp);
} else {
    startApp();
}

console.log("📦 script.js chargé avec tous les détails visage 8K");
