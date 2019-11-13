import styled from 'styled-components'  

export const DownloadButton = styled.a`
    background: transparent;
    font-family: spinnler,Courier,monospace;
    text-transform: uppercase;
    border: none;
    box-shadow: 1px 1px 4px rgba(0,0,0,.4);
    transition: all .4s;
    padding: 5px 10px;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 3px;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    color: #337ab7;
    margin-right: 10px;
    margin-bottom: 10px;
    width: 145px;

    @media (max-width: 767px) {
        display: none;
    }

    &:hover, &:focus {
        color: black;
    }
`;

export const DownloadContainer = styled.div`
    display: flex;
`;

export const DownloadImage = styled.img.attrs({ width: 15, height: 15 })`
    $:hover {
        color: black;
    }
`;

export const DownloadText = styled.span`
    margin-left: 8px;

    $:hover {
        color: black;
    }
`;