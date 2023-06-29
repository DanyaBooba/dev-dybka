---
layout: "base.njk"
---

<style>
    .count {
        counter-increment: line-count;
    }

    .count::before {
        content: counter(line-count);
    }
</style>

<div class="container">
    <pre>
        <span class="d-flex">
            <div class="d-flex flex-column me-3" style="user-select: none !important">
                <span class="count"></span>
                <span class="count"></span>
                <span class="count"></span>
                <span class="count"></span>
                <span class="count"></span>
                <span class="count"></span>
                <span class="count"></span>
                <span class="count"></span>
                <span class="count"></span>
                <span class="count"></span>
                <span class="count"></span>
                <span class="count"></span>
                <span class="count"></span>
                <span class="count"></span>
                <span class="count"></span>
                <span class="count"></span>
                <span class="count"></span>
                <span class="count"></span>
            </div>
            <code class="language-C#" id="tocopycode0">using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovable : MonoBehaviour
{

    // Start is called before the first frame update
    void Start() {
    }

    // Update is called once per frame
    void Update() {
    }

}
</code>
</span>

</pre>

</div>
