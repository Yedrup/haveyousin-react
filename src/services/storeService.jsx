import {
    setInLocalStorage,
    getFromLocalStorage,
    isExistingInLocalStorage
  } from "./localStorageService";

export const updateDataItemStore =  (store) => {
    let isExistingProperty =  isExistingInLocalStorage("firstStoreItemsrun");
    let firstStoreItemsrun =  getFromLocalStorage("firstStoreItemsrun");
    if (isExistingProperty && !firstStoreItemsrun) {
      // console.log("!firstStoreItemsrun", firstStoreItemsrun);
      setInLocalStorage("hysItems", store.allItems);
      setInLocalStorage("itemsIds", store.allIds);
      setInLocalStorage("firstStoreItemsrun", false);
    } else {
      console.log("falling in else because : isExistingProperty ",isExistingProperty, "and : firstStoreItemsrun ", firstStoreItemsrun );
    }
  }
export const updateDataListsStore =  (store) => {
    let isExistingProperty =  isExistingInLocalStorage("firstStoreListsrun");
    let firstStoreListsrun =  getFromLocalStorage("firstStoreListsrun");
    if (isExistingProperty && !firstStoreListsrun) {
      // console.log("!firstStoreListsrun", firstStoreListsrun);
      setInLocalStorage("hysLists", store.lists);
      setInLocalStorage("listAllIds", store.allIds);
      setInLocalStorage("customListIds", store.customListIds);
      setInLocalStorage("defaultListIds", store.defaultListIds);
      setInLocalStorage("firstStoreItemsrun", false);
    } else {
      console.log("falling in else because : isExistingProperty ",isExistingProperty, "and : firstStoreListsrun ", firstStoreListsrun );

    }
  }
