// change the document title dynamically.

import React, { useEffect, useState } from 'react';

const DocumentTitle = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        document.title = `${data}`
    }, [data])

    return <div>
        <input onChange={(el) => { setData(el.target.value) }} type="text" />
    </div>;
};

export default DocumentTitle;
