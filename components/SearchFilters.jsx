import {useEffect,useState} from 'react';
import {Flex,Select,Box,Text,Input,Spinner,Icon,Button, filter,useColorModeValue,InputGroup,InputRightAddon,CircularProgress} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import AsyncSelect from "react-select/async";
import {MdCancel} from 'react-icons/md';
import Image from 'next/image';

import {filterData,getFilterValues} from '../utils/filterData';
import {baseUrl,fetchApi} from '../utils/fetchApi';

import noresult from '../assets/images/noresult.svg';

const SearchFilters=()=>{
    const [filters,setFilters]=useState(filterData);
    const [searchTerm,setSearchTerm]=useState("");
    const [locationData,setLocationData]=useState();
    const [showLocations,setShowLocations]=useState(false);
    const [loading, setLoading]=useState(false);
    const router=useRouter();

   
    const searchbg = useColorModeValue("gray.100", "gray.700");
    const inputcolor = useColorModeValue("gray.800", "gray.200");
    const searchProperties = (filterValues) => {
        setLoading(true);
        const path = router.pathname;
        const { query } = router;
    
        const values = getFilterValues(filterValues)
    
        values.forEach((item) => {
          if(item.value && filterValues?.[item.name]) {
            query[item.name] = item.value
          }
        })
    
        router.push({ pathname: path, query: query });
        setLoading(false);
      };

     
      useEffect(()=>{
        if(searchTerm!==""){
            const fetchData=async()=>{
                setLoading(true);
                const data=await fetchApi(`${baseUrl}/auto-complete?query=${searchTerm}`);
                setLoading(false);
                setLocationData(data?.hits);
            };
            fetchData();
        }
      },[searchTerm]);
    return(
        <Flex bg='{searchbg}' p='4' justifyContent='center' flexWrap='wrap'>
     <Flex wrap="wrap" justifyContent="center" p="4">
        {filters?.map((filter) => (
          <Box key={filter.queryName}>
            <Select
              onChange={(e) =>
                searchProperties({ [filter.queryName]: e.target.value })
              }
              placeholder={filter.placeholder}
              w="fit-content"
              p="2">
              {filter?.items?.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </Select>
          </Box>
        ))}
      </Flex>

      
      {/* <Flex
        width="100%"
        borderTop="0.5px lightgray solid"
        justifyContent="center"
        wrap="wrap"
        paddingY={5}>
        {showLocations && (
          <Flex>
            <InputGroup
              focusBorderColor="gray.300"
              w="300px"
              margin={3}
              minWidth={"30%"}>
              <Input
                placeholder="Type Here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm !== "" && (
                <InputRightAddon>
                  <Icon
                    as={CloseIcon}
                    cursor="pointer"
                    // top="5"
                    zIndex="100"
                    onClick={() => setSearchTerm("")}
                  />
                </InputRightAddon>
              )}
              {loading && (
                <CircularProgress isIndeterminate marginX={5} height={1} />
              )}
            </InputGroup>
   
          </Flex>
        )} */}
      {/* </Flex> */}
        </Flex>
    )
}


export default SearchFilters