import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import projectsList from '../../data/projects.json'

const default_png = "defaultcode.png"
const Tag = styled.button`
    color: white; 
    font-weight: bold;
    background: ${props => props.selected? "var(--darkskyblue)" : "skyblue"};
    border: none;
    border-radius: 100px;
    padding: 0.5rem;
    margin: 0.25rem;
    transition: 0.15s;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }
    &.clear-tags{
        background: white;
        color: rgb(40,40,40);
    }
    &.mini{
        font-size: 0.75rem;
        background: white;
        color: var(--darkskyblue);
        padding: 0.25rem 0.5rem;
        background: rgb(220,220,220);
        cursor: auto;
        &:hover{
            opacity: 1;
        }
    }
`
const SearchInfoBar = styled.div`
    background: white;
    width: calc(100% - 1rem);
    max-width: 700px;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top: 0rem;
    padding: 1rem;
    border-radius:10px;
    h1{
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
    .input-container{
        width: max-content;
        margin: 0 auto;
        input{
            font-size: 1rem;
            padding: 0.25rem 0.75rem;
            border: 3px solid rgb(220,220,220);
            border-radius: 100px;
            margin: 1rem 0;
            width: 20vw;
            min-width: 200px;
            max-width: 400px;
            &:focus{
                outline: none;
                border-color: var(--darkskyblue);a
            }
        }
    }
 
    .tags-container{
        margin: 0.5rem;
    }
`

const CancelInput = styled.button`
    border: none;
    background: rgb(220,220,220);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    text-align: center;
    padding: 0.4rem;
    padding-top: 0;
    padding-bottom: 0.1rem;
    font-weight: bold;
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    cursor: pointer;
`

const PortfolioBar = styled.div`
    background: white;
    width: calc(100% - 1rem);
    max-width: 700px;
    margin: 0 auto;
    overflow: hidden;
    border-radius:10px;
    box-shadow:3px 3px 10px rgba(0,0,0,.3);

    a {
        display: flex;
        width:100%;
        margin: 0;
        padding: 0;
        color: black;
        font-weight: inherit;
        background: white;
        &:hover{
            background: rgb(245,245,245);
        }
        &:not(:first-child){
            border-top: 3px solid rgb(220,220,220);
        }
        .project-left{
            flex: 0;
            padding: 0;
            margin: 0;
            border-right: 3px solid rgb(220,220,220);
            @media only screen and (max-width: 800px){
                display: none;

            }
            .project-image{
                width: 8rem;
                height: 100%;
                min-height: 8rem;
                object-fit: cover;
                margin: 0;
            }
        }
        .project-right{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            h3{
                margin-bottom: 0.5rem;
                width: max-content;
            }
            .project-image-mobile{
                display: none;
                @media only screen and (max-width: 800px){
                    display: block;
                    width: 5rem;
                    height: 5rem;
                    object-fit: cover;
                    margin: 0.5rem auto;
                    border-radius: 5px;
                    border: 3px solid rgb(220,220,220);
                }
            }
        }
    }
`

const Bar = props=>{
    const [projects, setProjects] = useState([]);
    const [tags, setTags] = useState([]);
    const [tagFilters, setTagFilters] = useState({});
    const [tagCount, setTagCount] = useState(0);
    const [searchText, setSearchText] = useState("");

    const inputRef = useRef(null)
    
    useEffect(()=>{
        setProjects(projectsList);
        const projectTags = {}
        console.log(projectsList.length)
        projectsList.forEach(project=>{
            console.log(project.tags)
            project.tags.forEach(projectTag=>{
                projectTags[projectTag] = true;
            })
        })
        setTags(Object.keys(projectTags).sort((a,b)=>b > a));
        console.log(Object.keys(projectTags))
    },[]);

    useEffect(()=>{
        let filteredProjects = projectsList;
        if(tagCount > 0){
            filteredProjects = filteredProjects.filter(project => {
                let containsTags = false;
                project.tags.forEach(tag => {
                    containsTags = containsTags || tagFilters[tag];
                })
                return containsTags
            })
        }
        if(searchText){
            filteredProjects = filteredProjects.filter(project => {
                return (
                    project.name.toLowerCase().match(searchText) ||
                    project.description.toLowerCase().match(searchText)
                )
            })
        }
        
        setProjects(filteredProjects);
    },[tagFilters,searchText,
    tagCount
    // comment out later
    ]);

    function resetTags(){
        setTagFilters([]);
        setTagCount(0);
    }

    function inputHandler(e){
        const search = e.target.value.trim();
        setSearchText(search.toLowerCase());
    }
    
    function toggleTagFilter(tag){
        const newTagFilters = [];
        
        if(newTagFilters[tag]){
            setTagCount(tagCount - 1);
        }else{
            setTagCount(tagCount + 1);
        }
        newTagFilters[tag] = !newTagFilters[tag];
        setTagFilters(newTagFilters) ;
    }

    function cancelInput(){
        setSearchText("");
        inputRef.current.value = "";
    }

    return(
        <div className="fade-basic">
        <SearchInfoBar >
            <h1>My Portfolio</h1>
            <div className='input-container'>
                <input ref={inputRef} onChange={inputHandler}/>
                {searchText && <CancelInput onClick={cancelInput}>x</CancelInput>}
            </div>
            <div className='tags-container'>
            <Tag onClick={resetTags} selected={tagCount === 0}>all</Tag>
                {tags.map((tag,i) => (<Tag key={tag} onClick={()=>toggleTagFilter(tag,i)} selected={tagFilters[tag]}>{tag}</Tag>))}
            </div>
        </SearchInfoBar>
            <PortfolioBar>
            {projects.map(project=>(<a rel="noreferrer" target="_blank" href={project.link} key={project.name}>
                <div className='project-left'>
                    <img  alt={project.name + " image"} className='project-image' src={project.image ? "/assets/images/" + project.image :  "/assets/images/" + default_png}/>
                </div>
                <div className='project-right'>
                    <h3>{project.name}</h3>
                    <img className="project-image-mobile" src={project.image ? "/assets/images/" + project.image :  "/assets/images/" + default_png}/>
                    <p>{project.description}</p>
                    <div>
                        {project.tags.map(tag => (<Tag className='mini'>{tag}</Tag>))}
                    </div>
                </div>
            </a>))}
        </PortfolioBar>
        </div>
    )
}

export default Bar;