var url = new URL(window.location.href);

if (!url.searchParams.get("emi") && !url.searchParams.get("rh")) {
    url.searchParams.append("emi", "AN1VRQENFRJN5");
    location.replace(url);
}