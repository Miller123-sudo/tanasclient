import { React, useState, useEffect } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Button, ButtonGroup, Tabs, Tab, Col, Container, Form, Row, Breadcrumb, Table, DropdownButton, Dropdown } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ApiService from '../../../helpers/ApiServices';

export default function WorkLocation() {
    const [state, setState] = useState({});
    const history = useHistory();
    const { id } = useParams();
    const isAddMode = !id;

    const { register, control, reset, handleSubmit, getValues, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {
        }
    });

    const onSubmit = (formData) => {
        console.log(formData);
        return isAddMode
            ? createDocument(formData)
            : updateDocument(id, formData);
    }

    const createDocument = (data) => {
        ApiService.setHeader();
        return ApiService.post('/location', data).then(response => {
            if (response.data.isSuccess) {
                history.push("/employees/worklocations");
            }
        }).catch(e => {
            console.log(e);
        })
    }

    const updateDocument = (id, data) => {
        ApiService.setHeader();
        return ApiService.patch(`/location/${id}`, data).then(response => {
            console.log(response.data)
            if (response.data.isSuccess) {
                history.push("/employees/worklocations");
            }
        }).catch(e => {
            console.log(e);
        })

    }

    const deleteDocument = () => {
        ApiService.setHeader();
        return ApiService.delete(`/location/${id}`).then(response => {
            console.log(response)
            if (response.status == 204) {
                history.push("/employees/worklocations");
            }
        }).catch(e => {
            console.log(e);
        })
    }

    useEffect(async () => {

        if (!isAddMode) {
            ApiService.setHeader();
            ApiService.get(`location/${id}`).then(response => {
                const employee = response.data.document;
                setState(employee)
                reset(employee);
                if (employee.date) {
                    setValue('date', employee.date.split("T")[0])
                }

            }).catch(e => {
                console.log(e)
            })
        }
    }, []);
    return (
        <Container className="pct-app-content-container p-0 m-0" fluid>
            <Form onSubmit={handleSubmit(onSubmit)} className="pct-app-content" >
                <Container className="pct-app-content-header  m-0 pb-2" style={{ borderBottom: '1px solid black' }} fluid>
                    <Row>
                        <Breadcrumb style={{ fontSize: '24px' }}>
                            <Breadcrumb.Item className="breadcrumb-item" linkAs={Link} linkProps={{ to: '/employees/worklocations' }} ><h3 className="breadcrum-label">Work Locations</h3></Breadcrumb.Item>
                            {isAddMode ? <Breadcrumb.Item active><span >New</span></Breadcrumb.Item> : <Breadcrumb.Item active><span>{state.name}</span></Breadcrumb.Item>}
                        </Breadcrumb>
                    </Row>
                    <Row>
                        <Col>
                            <Button type="submit" variant="primary" size="sm">SAVE</Button>{" "}
                            <Button as={Link} to="/employees/worklocations" variant="light" size="sm">DISCARD</Button>
                            {!isAddMode && <DropdownButton size="sm" as={ButtonGroup} variant="light" title="ACTION">
                                <Dropdown.Item onClick={deleteDocument} eventKey="4">Delete</Dropdown.Item>
                            </DropdownButton>}
                        </Col>
                    </Row>
                </Container>
                <Container className="pct-app-content-body p-0 m-0 mt-2" fluid>
                    <Container className="mt-2" fluid>
                        <Row>
                            <Form.Group as={Col} md="4" className="mb-2">
                                <Form.Label className="m-0">Work Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="name"
                                    name="name"
                                    {...register("name")}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-2">
                                <Form.Label className="m-0">Location Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="locationNumber"
                                    name="locationNumber"
                                    {...register("locationNumber")}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-2">
                                <Form.Label className="m-0">Address</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    id="address"
                                    name="address"
                                    {...register("address")}
                                />
                            </Form.Group>

                        </Row>
                    </Container>

                </Container>
            </Form>
        </Container>
    )
}


