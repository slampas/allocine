let redirect = (id, name) => {
    document.getElementById(id).onclick = function () {
        if (!location.href.endsWith("index.html"))
            name = "../" + name;
        location.href = name + ".html";
    };
};

redirect("logo", "index");

redirect("cinema", "pages/cinema");
redirect("series", "pages/series");
redirect("streaming", "pages/streaming");
redirect("news", "pages/news");
