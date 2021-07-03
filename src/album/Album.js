export default class Album {
    constructor(id, title, thumbnailUrl) {
        this.id = id;
        this.title = title;
        this.thumbnailUrl = thumbnailUrl || "";
    }
}
