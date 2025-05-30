import React from 'react';
import {
    Box,
    Checkbox,
    CheckboxGroup,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Text,
    VStack,
    Heading,
    Flex,
    IconButton,
    Collapse,
    Divider,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { filterData } from 'types/filterData';
import { useDisclosure } from '@chakra-ui/react';

const FilterSidebar = () => {
    const [minPrice, setMinPrice] = React.useState(filterData.pricingRange.min);
    const [maxPrice, setMaxPrice] = React.useState(filterData.pricingRange.max);

    const qualifications = useDisclosure({ defaultIsOpen: true });
    const pricing = useDisclosure({ defaultIsOpen: true });
    const subjects = useDisclosure({ defaultIsOpen: true });
    const gender = useDisclosure({ defaultIsOpen: true });
    const learningStyle = useDisclosure({ defaultIsOpen: true });

    return (
        <Box
            w="270px"

            bg="gray.100"
            borderRightWidth="1px"
            borderRightColor="gray.300"
            borderBottomWidth="1px"
            borderBottomColor="gray.200"
            zIndex={1}
        >

            <VStack align="start" spacing={4} py={4} overflow="visible" zIndex={2} divider={<Divider borderColor="gray.300" />}>
                {/* Qualifications */}
                <Box w="100%" px={4}>
                    <Flex justify="space-between" align="center">
                        <Heading as="h3" size="sm">Qualifications</Heading>
                        <IconButton
                            size="sm"
                            variant="ghost"
                            aria-label="Toggle Qualifications"
                            icon={qualifications.isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
                            onClick={qualifications.onToggle}
                        />
                    </Flex>
                    <Collapse in={qualifications.isOpen}>
                        <CheckboxGroup colorScheme="blue" >
                            <VStack align="start" spacing={2} mt={2}>
                                {filterData.qualifications.map((q) => (
                                    <Checkbox key={q.id} value={q.id}>{q.label}</Checkbox>
                                ))}
                            </VStack>
                        </CheckboxGroup>
                    </Collapse>
                </Box>

                {/* Pricing */}
                <Box w="100%">
                    <Flex justify="space-between" align="center" px={4}>
                        <Heading as="h3" size="sm">Pricing (per hour)</Heading>
                        <IconButton
                            size="sm"
                            variant="ghost"
                            aria-label="Toggle Pricing"
                            icon={pricing.isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
                            onClick={pricing.onToggle}
                        />
                    </Flex>
                    <Collapse in={pricing.isOpen}>
                        <Box px={4}>
                            <Text fontSize="sm" mt={2}>Min: ${minPrice}</Text>
                            <Slider
                                value={minPrice}
                                min={filterData.pricingRange.min}
                                max={maxPrice}
                                step={1}
                                onChange={(val) => setMinPrice(val)}
                            >
                                <SliderTrack><SliderFilledTrack /></SliderTrack>
                                <SliderThumb />
                            </Slider>

                            <Text fontSize="sm" mt={2}>Max: ${maxPrice}</Text>
                            <Slider
                                value={maxPrice}
                                min={minPrice}
                                max={filterData.pricingRange.max}
                                step={1}
                                onChange={(val) => setMaxPrice(val)}
                                zIndex={1}
                            >
                                <SliderTrack><SliderFilledTrack /></SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </Box>
                    </Collapse>
                </Box>

                {/* Subject Areas */}
                <Box w="100%" px={4}>
                    <Flex justify="space-between" align="center">
                        <Heading as="h3" size="sm">Subject Areas</Heading>
                        <IconButton
                            size="sm"
                            variant="ghost"
                            aria-label="Toggle Subjects"
                            icon={subjects.isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
                            onClick={subjects.onToggle}
                        />
                    </Flex>
                    <Collapse in={subjects.isOpen}>
                        <CheckboxGroup colorScheme="blue">
                            <VStack align="start" spacing={2} mt={2}>
                                {filterData.subjectAreas.map((subject) => (
                                    <Checkbox key={subject.id} value={subject.id}>{subject.name}</Checkbox>
                                ))}
                            </VStack>
                        </CheckboxGroup>
                    </Collapse>
                </Box>

                {/* Gender */}
                <Box w="100%" px={4}>
                    <Flex justify="space-between" align="center">
                        <Heading as="h3" size="sm">Gender</Heading>
                        <IconButton
                            size="sm"
                            variant="ghost"
                            aria-label="Toggle Gender"
                            icon={gender.isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
                            onClick={gender.onToggle}
                        />
                    </Flex>
                    <Collapse in={gender.isOpen}>
                        <CheckboxGroup colorScheme="blue">
                            <VStack align="start" spacing={2} mt={2}>
                                <Checkbox value="any">Any</Checkbox>
                                <Checkbox value="male">Male</Checkbox>
                                <Checkbox value="female">Female</Checkbox>
                            </VStack>
                        </CheckboxGroup>
                    </Collapse>
                </Box>

                {/* Specialised Learning Style */}
                <Box w="100%" px={4}>
                    <Flex justify="space-between" align="center">
                        <Heading as="h3" size="sm">Specialised Learning Style</Heading>
                        <IconButton
                            size="sm"
                            variant="ghost"
                            aria-label="Toggle Specialised Learning Style"
                            icon={learningStyle.isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
                            onClick={learningStyle.onToggle}
                        />
                    </Flex>
                    <Collapse in={learningStyle.isOpen}>
                        <CheckboxGroup colorScheme="blue">
                            <VStack align="start" spacing={2} mt={2}>
                                {filterData.specialisedLearningStyles.map((style) => (
                                    <Checkbox key={style.id} value={style.id}>{style.label}</Checkbox>
                                ))}
                            </VStack>
                        </CheckboxGroup>
                    </Collapse>
                </Box>
            </VStack>
        </Box>
    );
};

export default FilterSidebar;