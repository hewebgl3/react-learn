import React, { Component } from 'react';

export default function Component1(props, /* context */) {
    const jsx = (<span>
        这个有多行
        </span>);

    return <div>
        {jsx}
        </div>
}
