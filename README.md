Geniem screening prosessin React tehtävä

Bootstrapattu create-react-appilla, eli perus 'yarn start', 'yarn build' jne toimii

Live versio https://codetest.halikka.fi/ 

Komponentteina käytetty:
    - react-photo-gallery (https://www.npmjs.com/package/react-photo-gallery)
    - react-images (https://www.npmjs.com/package/react-images)
    - react-infinite-scroller (https://www.npmjs.com/package/react-infinite-scroller)

State managerina toimii Storeon (https://evilmartians.com/chronicles/storeon-redux-in-173-bytes). Redux on niin järeä työkalu että tähän projektiin olisi mennyt enemmän aikaa viritellä sagat ja/tai thunkit + redux kun mitä koko projektin tekemiseen. Tykkään siitä mitä Redux tarjoaa, mutta pienempiin projekteihin yleensä käytän Storeonia joka ajaa saman asian kevyemmin. Sikäli mikäli projekti sitä vaatii skaalallaan, otetaan Redux tietty käyttöön

react-infinite-scroller hoitaa sivutuksen (20 kuvaa kerrallaan, 5000 asti joka on palvelun limitti), datan haut tehdään axioksella (käytännössä vaan hieno wrapperi fetchille), ja photo-gallery hoitaa itse gallerian yhteistyössä react-imagesin kanssa (lightbox ja karuselli)


