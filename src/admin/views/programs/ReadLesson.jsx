import React, {useEffect, useState} from 'react'
import {
  awaitSync,
  CustomizeBreadcrumbs
} from "../../utils";
import {breadcrumbsLessons} from "../../utils/breadcrum";
import SecondaryAction from "../../ui-component/cards/CardSecondaryAction";
import LinkIcon from "@mui/icons-material/Link";
import MainCard from "../../ui-component/cards/MainCard";
import { useNavigate, useParams } from "react-router-dom";
import {useTheme} from "@mui/material/styles";
import Skeleton from "@mui/material/Skeleton";
import { levels } from "../../utils/password-strength";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import LinearWithValueLabel from "../../utils/LinearProgressWithLabel";


const  ReadLesson = () => {
  const param = useParams()
  const selected_level=1
  const selected_semester=param.semester
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    awaitSync(5000).then(() => {
      setLoading(false); // Une fois l'attente terminée, définir isLoading sur false
    });
  }, []);
  const theme = useTheme();
  const navigate = useNavigate();
  const lesson = levels[selected_level-1].semesters[selected_semester-1].subjects.find(subject => subject.id === Number(param.id))
  return (
    <MainCard
      title={
        <CustomizeBreadcrumbs paths={breadcrumbsLessons} param={param.id} url='/admin/programs/lessons' />
      }
      secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} />}
      className='lessons'
    >
      {isLoading? <Stack spacing={2}>
          <Skeleton variant='rectangular' width='20%'  height={40} />
          <Skeleton variant='rectangular' width='100%' height={40} />
          <Skeleton variant='rectangular' width='75%' height={40} />
        </Stack>:
          <Box sx={{width:{xs:"95%", md:"98%"}}}>
            <Stack spacing={2}>
              <Box >
                <Typography variant="h4">Code du cour : </Typography>
                <Typography variant="body2">{lesson.id}</Typography>
              </Box>
              <Box >
                <Typography variant="h4">Libellé du cour : </Typography>
                <Typography variant="body2">{lesson.lesson}</Typography>
              </Box>
              <Box >
                <Typography variant="h4">Enseignant de la matière : </Typography>
                <Typography variant="body2" color={theme.palette.primary.dark}>{lesson.teacher}</Typography>
              </Box>
              <Box >
                <Typography variant="h4">Date de débutage du cour : </Typography>
                <Typography variant="body2">{lesson.beginDate}</Typography>
              </Box>
              <Box >
                <Typography variant="h4">Heures total du cour : </Typography>
                <Typography variant="body2">{lesson.hours}</Typography>
              </Box>
              <Box>
                <Typography variant="h4">Progression actuelle du cour : </Typography>
                <Typography variant="body2" display='flex'>
                  <LinearWithValueLabel value={lesson.progression} />
                </Typography>
              </Box>
              <Box >
                <Typography variant="h4">Date du Controle continu(cc) : </Typography>
                <Typography variant="body2">{lesson.ccIsProgramated.statut? lesson.ccIsProgramated.date:'(Pas définir.)'}</Typography>
              </Box>
              <Box >
                <Typography variant="h4">Date de l'examen : </Typography>
                <Typography variant="body2">{lesson.examIsProgramated.statut? lesson.examIsProgramated.date:'(Pas définir.)'}</Typography>
              </Box>
            </Stack>
            <Stack direction='row' gap={2} my={3}>
              <Button variant='outlined' sx={{
                textTransform:"initial",
                border:"1px solid var(--standard-primary)",
                color:"var(--standard-primary)",
                "&:hover":{
                  backgroundColor:'var(--standard-primary-hover)',
                  color:"var(--standard)"
                }
              }}>support(s) de ce cour</Button>
              <Button variant='standard' sx={{
                textTransform:"initial",
                backgroundColor:'var(--standard-primary)',
                color:"var(--standard)",
                "&:hover":{
                  backgroundColor:'var(--standard-primary-hover)',
                  color:"var(--standard)"
                }
              }}>Travaux dirigés</Button>
            </Stack>
          </Box>
      }
    </MainCard>
  )
}
export default  ReadLesson;