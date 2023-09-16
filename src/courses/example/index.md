# Example

```C#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovable : MonoBehaviour
{
    [SerializeField] private Transform groundPoint;
    [SerializeField] private LayerMask groundLayer;

    private Rigidbody2D rb;

    private float speed = 7f;
    private float jumpForce = 5f;

    private float moveInput;
    private float flipValue;

}
```

```JSON
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovable : MonoBehaviour
{
    [SerializeField] private Transform groundPoint;
    [SerializeField] private LayerMask groundLayer;

    private Rigidbody2D rb;

    private float speed = 7f;
    private float jumpForce = 5f;

    private float moveInput;
    private float flipValue;

}
```
