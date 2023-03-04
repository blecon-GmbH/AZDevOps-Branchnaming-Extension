let branchDialogQuerySelector = ".vc-create-branch-dialog-fix";
let branchNameQuerySelector = ".vc-create-branch-dialog-fix input";

let itemIdQuerySelector = ".vc-create-branch-dialog-fix .la-primary-data-id";
let itemNameQuerySelector = ".vc-create-branch-dialog-fix .ms-TooltipHost a";

let featureIconQuerySelector = ".vc-create-branch-dialog-fix .bowtie-symbol-book";
let bugIconQuerySelector = ".vc-create-branch-dialog-fix .bowtie-symbol-bug";
let taskIconQuerySelector = ".vc-create-branch-dialog-fix .bowtie-symbol-task";

function setBranchName() {
    try {
        var name = "" + getBranchType() + getBranchName();
        document.querySelector(branchNameQuerySelector).value = name;
    } catch {}
}

function getBranchName() {
    var itemId = document.querySelector(itemIdQuerySelector).innerHTML
    itemId = itemId.replaceAll("&nbsp;", "").trim();

    var itemName = document.querySelector(itemNameQuerySelector).innerHTML;
    itemName = itemName.trim().toLocaleLowerCase();
    itemName = itemName
        .replaceAll("ä", "ae").replaceAll("ö", "oe").replaceAll("ü", "ue").replaceAll("ß", "ss")
        .replaceAll("_", "-").replaceAll("?", "").replaceAll("#", "").replaceAll("!", "")
        .replaceAll("\"", "").replaceAll("'", "").replaceAll("!", "").replaceAll("$", "")
        .replaceAll(":", "").replaceAll(".", "").replaceAll(",", "").replaceAll("&amp;", "")
        .replaceAll("=", "").replaceAll("&lt;", "").replaceAll("&gt;", "").replaceAll("/", "").replaceAll("\\", "")
        .replaceAll(" - ", " ").replaceAll("  ", " ").replaceAll("-", "");
    itemName = itemName.replaceAll(" ", "-");

    return itemId + "-" + itemName;
}

function getBranchType() {
    if(document.querySelector(featureIconQuerySelector) !== null) {
        return "feature/";
    } else if(document.querySelector(bugIconQuerySelector) !== null) {
        return "bugfix/";
    } else if(document.querySelector(taskIconQuerySelector) !== null) {
        return "task/";
    }

    return "";
}

document.addEventListener("DOMSubtreeModified", function(event){
    if(document.querySelector(branchDialogQuerySelector) !== null) {
        setBranchName();
    }
});