angular.module('Eggly', [])
.controller('MainCtrl', function($scope){

    $scope.categories = [
        {"id": 0, "name": "Development"},
        {"id": 1, "name": "Design"},
        {"id": 2, "name": "Exercise"},
        {"id": 3, "name": "Humor"}
    ];

    $scope.bookmarks = [
        {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
        {"id": 1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development" },
        {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
        {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
        {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
        {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
        {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
        {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
        {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
    ];

    $scope.currentCategory = null;
    $scope.isCreating = false;
    $scope.isEditing = false;


    function setCurrentCategory(category){
        $scope.currentCategory = category;
        cancelCreating();
        cancelEditing();
    }

    function isCurrentCategory(category){
        return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
    }

    function startCreating() {
        $scope.isCreating = true;
        $scope.isEditing = false;
        resetCreateForm();
    }

    function cancelCreating() {
        $scope.isCreating = false;
    }

    function startEditing() {
        $scope.isCreating = false;
        $scope.isEditing = true;
    }

    function cancelEditing() {
        $scope.isEditing = false;
    }

    function shouldShowCreating(){
        return $scope.currentCategory && !$scope.isEditing;
    }

    function shouldShowEditing(){
        return $scope.isEditing && !$scope.isCreating;
    }


    //----------------------- CRUD -----------------------

    function createBookmark(bookmark){
        bookmark.id = $scope.bookmarks.length;
        $scope.bookmarks.push(bookmark);
        resetCreateForm();
    }

    function resetCreateForm(){
        $scope.newBookmark = {
            title : '',
            url : '',
            category: $scope.currentCategory
        }
    }



    $scope.setCurrentCategory = setCurrentCategory; //this line let the setCurrentCategory function will be available to the view (public)
    $scope.isCurrentCategory = isCurrentCategory;
    $scope.cancelEditing = cancelEditing;
    $scope.startEditing = startEditing;
    $scope.cancelCreating = cancelCreating;
    $scope.startCreating = startCreating;
    $scope.shouldShowEditing = shouldShowEditing;
    $scope.shouldShowCreating = shouldShowCreating;
    $scope.createBookmark = createBookmark;


});