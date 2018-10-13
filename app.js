(() => {
    let
        myCollectionData = [
            {"name": "Manager1", "role": "Senior"},
            {"name": "Manager2", "role": "Senior1"},
            {"name": "Manager3", "role": "Senior2"},
            {"name": "Manager4", "role": "Senior3"},
            {"name": "Manager5", "role": "Senior4"},
            {"name": "Manager6", "role": "Senior5"},
            {"name": "Manager7", "role": "Senior6"},
            {"name": "Manager8", "role": "Senior7"},
        ];

    var parent = document.getElementById('tile-wrapper');
    myCollectionData.map((data) => {
        var node = document.createElement("div");
        node.classList.add("tile-children");
        var textnode = document.createTextNode(`Manager: ${data.name}  Role: ${data.role}`);
        node.appendChild(textnode);
        parent.appendChild(node);
    });
})(window)
