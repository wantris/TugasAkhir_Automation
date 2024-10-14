class CategorySelector {
    get categoryLink() {
        return $('a[href="/categories"]');
    }

    get addCategoryLink() {
        return $('a[href="/categories/create"]');
    }

    get nameInput() {
        return $('#nama');
    } 

    get descriptionInput() {
        return $('#deskripsi');
    } 

    get saveCategoryButton() {
        return $('button.chakra-button');
    }

    get successToastMsg(){
        return $('div[role="alert"] div.chakra-alert__title');
    }

    get successToastDesc(){
        return $('div[role="alert"] div.chakra-alert__desc');
    }

    get errorMessage(){
        return $('div[role="alert"].chakra-alert.css-qwanz3');
    }
};

module.exports = CategorySelector;